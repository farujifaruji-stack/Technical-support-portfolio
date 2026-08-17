# Investigation Notes

## Read the ticket

### The issue

The customer says the card was charged, but the order is still in `Pending` status. The customer received no confirmation message or email receipt.

| Field | Value |
|---|---|
| Payment status | Customer reports that payment was charged |
| OrderStatus | Pending |

The issue may be that the payment was completed in Stripe, but the order was not updated after the Stripe flow.

### Customer details provided

| Field | Value |
|---|---|
| Customer email | `customer@example.com` |
| Order ID | `ORD-100245` |
| Payment amount | `$49.99` |
| Payment date | `17 August 2026, around 10:42` |

## Next: Look up the information in the database

Make sure the database has the same information the customer provided.

### Query

```sql
SELECT *
FROM Orders
WHERE Id = 'ORD-100245';
```

### Output

| Id | CustomerId | OrderStatus | FlowStep | Amount | Currency | DateCreated | DateUpdated |
|---|---|---|---|---:|---|---|---|
| ORD-100245 | CUS-30981 | Pending | StripePending | 49.99 | USD | 2026-08-17 10:42:08 UTC | 2026-08-17 10:42:09 UTC |

### Query

```sql
SELECT *
FROM OrderPayments
WHERE OrderId = 'ORD-100245';
```

### Output

| Id | OrderId | Status | CheckoutSessionId | StripePaymentId | Last4Digits | DateCreated | DateUpdated |
|---|---|---|---|---|---|---|---|
| PAY-800245 | ORD-100245 | Due | cs_test_100245 | null | 4242 | 2026-08-17 10:42:09 UTC | 2026-08-17 10:42:09 UTC |

The database does not show that the payment was completed internally yet. It looks like the customer began the Stripe flow, but Stripe Dashboard must be checked to confirm whether the customer was charged.

## Next: Look up logs and webhooks

From the application logs, the customer was redirected to Stripe. The order was not updated after the payment flow.

Checking webhooks:

The webhook contains the correct Order ID: `ORD-100245`.

However, the application searched for `StripePaymentId = pi_test_100245`, while the `OrderPayments` record has `StripePaymentId = null` and only contains the `CheckoutSessionId`.

Because no payment record was found, the payment status was not updated in the database. Since the payment record was not updated, the order status was not updated either.

## Next: Look in Stripe Dashboard

The payment succeeded, so the customer was actually charged.

Due to the `500` error, the payment and order information were not updated in the database.

### Payment record

| Field | Stripe Dashboard result |
|---|---|
| Payment Intent ID | `pi_test_100245` |
| Payment status | `Succeeded` |
| Amount | `$49.99 USD` |
| Payment method | Card ending in `4242` |
| Customer email | `customer@example.com` |
| Created | `17 August 2026, 10:43 UTC` |
| Receipt email | Not sent |

### Checkout Session record

| Field | Stripe Dashboard result |
|---|---|
| Checkout Session ID | `cs_test_100245` |
| Checkout status | `Complete` |
| Payment status | `Paid` |
| Payment Intent ID | `pi_test_100245` |
| Order ID metadata | `ORD-100245` |

## Steps

### 1. Look up similar cases in the database

```sql
SELECT o.*, op.*
FROM Orders AS o
LEFT JOIN OrderPayments AS op
  ON op.OrderId = o.Id
WHERE o.OrderStatus = 'Pending'
  AND op.Status = 'Due';
```

### 2. Cross-check order IDs in logs and webhooks

Check for these log entries:

```text
INFO  Webhook response sent
event_id=evt_100245 response_status=500
```

```text
ERROR Unable to update order after successful payment
event_id=evt_100245 order_id=unknown error="Payment record not found"
```

### 3. Confirm whether the issue affects multiple customers

If this issue happens with multiple customers, review the code that saves and looks up Stripe identifiers. The database and webhook process need to use the same identifier.

A code fix requires a Jira ticket.

### 4. Handle affected customers

After discussing the issue with the Finance team and Support Manager, there are two options:

1. Manually update the payment and order statuses, then send the receipt manually.
2. Refund the customer if the order cannot be fulfilled, and explain the next steps to the customer.

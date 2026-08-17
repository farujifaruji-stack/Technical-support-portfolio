# Payment succeeded in Stripe but the order stays Pending

> **Note:** This Jira ticket is a simulated portfolio artifact.

**Type:** Bug  
**Priority:** High  
**Status:** Open  
**Environment:** Production  
**Related order:** `ORD-100245`

## Issue

The customer completed the payment successfully in Stripe and was charged.

However, the payment and order were not updated in the database:

| Field | Value |
|---|---|
| Payment status in Stripe | Succeeded |
| Payment status in database | Due |
| Order status in database | Pending |
| Webhook response | 500 Internal Server Error |

The customer did not receive the success message or email receipt.

## Root cause

The `checkout.session.completed` webhook searches for the payment record using `StripePaymentId`.

```text
StripePaymentId = pi_test_100245
```

However, the `OrderPayments` table only has the Checkout Session ID saved.

```text
CheckoutSessionId = cs_test_100245
StripePaymentId = null
```

Because the payment record is not found, the webhook returns a `500` error. The payment and order statuses are not updated.

## What needs to be changed

Change the webhook lookup to search by `CheckoutSessionId`.

The Checkout Session ID is already saved in the `OrderPayments` table and is available in the `checkout.session.completed` webhook event.

## Expected result after the fix

- The webhook finds the correct `OrderPayments` record.
- `OrderPayments.Status` is updated from `Due` to `Paid`.
- `OrderPayments.StripePaymentId` is updated with the Payment Intent ID.
- `Orders.OrderStatus` is updated from `Pending` to `Paid`.
- The customer receives a payment-success message.
- A receipt email is sent to the customer.
- The webhook returns `200 OK`.

## Acceptance criteria

- [ ] Payment record is found using `CheckoutSessionId`.
- [ ] Successful Stripe payment updates `OrderPayments`.
- [ ] Successful Stripe payment updates `Orders`.
- [ ] Webhook returns `200 OK`.
- [ ] Receipt is sent after the order is updated.
- [ ] A failed webhook event can be safely retried.
- [ ] Existing affected orders are manually reconciled or refunded.

## Affected customers

Support and Finance should review payments where:

```text
OrderStatus = Pending
PaymentStatus = Due
Stripe payment status = Succeeded
```

Affected customers should either have their order manually updated and receive a receipt, or be refunded if the order cannot be fulfilled.

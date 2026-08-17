# Known Issue: Payment Succeeded but Order Status Was Not Updated

## Issue summary

A Stripe payment can succeed while the related order remains in `Pending` status.

The customer may not receive an order confirmation or receipt email.

## Affected flow

```text
Customer completes payment in Stripe
→ Stripe sends checkout.session.completed webhook
→ Application cannot find the payment record
→ Webhook returns 500
→ Payment and order statuses remain unchanged
```

## Symptoms

- Stripe payment status is `Succeeded`.
- `Orders.OrderStatus` remains `Pending`.
- `OrderPayments.Status` remains `Due`.
- Webhook logs show `Payment record not found`.
- Stripe Dashboard shows webhook delivery failures or retries.

## Cause

The webhook searched for the payment record using `StripePaymentId`, but the payment record only had `CheckoutSessionId` saved.

## Workaround

1. Confirm the payment in Stripe Dashboard.
2. Confirm the order and payment records in the database.
3. Manually update the payment and order statuses, if approved.
4. Send the customer confirmation and receipt.
5. Refund the customer if the order cannot be fulfilled.

## Permanent fix

Update the webhook handler to find the payment record using `CheckoutSessionId`.

## Escalation

Escalate to Technical Support if:

- The payment succeeded in Stripe but the order is still `Pending`.
- The webhook returned a `500` error.
- More than one customer is affected.

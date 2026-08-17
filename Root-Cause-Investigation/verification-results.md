# Verification Results

> **Note:** This is simulated verification evidence for a portfolio case study.

## Fix tested

The webhook payment lookup was changed from `StripePaymentId` to `CheckoutSessionId`.

## Test result

| What was tested | Expected result | Actual result | Status |
|---|---|---|---|
| Successful Stripe payment | Stripe sends `checkout.session.completed` webhook | Webhook received | Pass |
| Webhook payment lookup | Payment record is found using `CheckoutSessionId` | `PAY-800245` was found using `cs_test_100245` | Pass |
| Payment update | `OrderPayments.Status` changes from `Due` to `Paid` | Payment status updated to `Paid` | Pass |
| Payment Intent ID update | `StripePaymentId` is saved | `pi_test_100245` saved in `OrderPayments` | Pass |
| Order update | `Orders.OrderStatus` changes from `Pending` to `Paid` | Order status updated to `Paid` | Pass |
| Webhook response | Webhook returns `200 OK` | `200 OK` returned to Stripe | Pass |
| Customer communication | Success message and receipt are sent | Confirmation message and receipt sent | Pass |

## Database result after the fix

### Orders

| Id | OrderStatus | FlowStep | DateUpdated |
|---|---|---|---|
| ORD-100245 | Paid | Authed | 2026-08-17 11:15:42 UTC |

### OrderPayments

| Id | OrderId | Status | CheckoutSessionId | StripePaymentId | DateUpdated |
|---|---|---|---|---|---|
| PAY-800245 | ORD-100245 | Paid | cs_test_100245 | pi_test_100245 | 2026-08-17 11:15:42 UTC |

## Conclusion

The fix was successful. The payment record was found using the Checkout Session ID, the payment and order were updated, and Stripe received a successful webhook response.

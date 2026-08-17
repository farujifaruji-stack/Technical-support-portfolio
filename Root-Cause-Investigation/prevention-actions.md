# Prevention Actions

## Code changes

- Use `CheckoutSessionId` to find the payment record when processing `checkout.session.completed`.
- Save `StripePaymentId` after the payment record is found.
- Return `500` only when the webhook cannot be processed. Return `200 OK` after a successful update.

## Database checks

- Make `CheckoutSessionId` required after a Checkout Session is created.
- Add a check for payments where Stripe reports `Succeeded`, but the internal payment status is not `Paid`.
- Review records where `Orders.OrderStatus = Pending` and `OrderPayments.Status = Due`.

## Logging and monitoring

- Log the Order ID, Checkout Session ID, Payment Intent ID, webhook Event ID, and response status for every webhook.
- Create an alert when a webhook returns `500`.
- Create an alert when Stripe retries the same event multiple times.

## Support and Finance process

- Create a reconciliation process for successful Stripe payments that are not updated in the database.
- Support confirms the payment in Stripe before communicating with the customer.
- Finance and Support decide whether to manually complete the order or refund the payment.
- Send the receipt after an affected order is manually reconciled.

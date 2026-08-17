# Root Cause Investigation — Successful Payment but Order Remained Pending

> **Note:** This is a simulated portfolio case study demonstrating a technical-support investigation process.

## Scenario

A customer completed a payment successfully in Stripe and was charged. However, the ShopSphere order remained in `Pending` status.

The customer did not receive a payment-success message or receipt email.

## Root cause

The `checkout.session.completed` webhook searched for an `OrderPayments` record using the Stripe Payment Intent ID.

However, the database payment record stored the Checkout Session ID. Because the identifiers did not match, the application could not find the payment record and returned `500 Internal Server Error`.

## Resolution

The webhook lookup was changed to use `CheckoutSessionId`, which is already saved in the `OrderPayments` table.

After the payment record is found:

- The payment status is updated to `Paid`.
- The Stripe Payment Intent ID is saved.
- The order status is updated to `Paid`.
- Stripe receives `200 OK`.
- The customer receives a confirmation and receipt.

## Investigation process

1. Read the customer ticket.
2. Check the order and payment records in the database.
3. Review application and webhook logs.
4. Confirm the payment and webhook status in Stripe Dashboard.
5. Review the webhook code.
6. Identify the identifier mismatch.
7. Create a Jira ticket for the fix.
8. Test and verify the resolution.
9. Document prevention actions.

## Project contents

| File or folder | Description |
|---|---|
| `customer-ticket.md` | Simulated customer support ticket. |
| `investigation-log.md` | Investigation notes, database queries, log review, and findings. |
| `database/` | Simulated `Orders` and `OrderPayments` table records. |
| `logs/` | Application and webhook log evidence. |
| `events/` | Simulated Stripe payment and webhook events. |
| `evidence/stripe-dashboard-review.md` | Simulated Stripe Dashboard review. |
| `code/webhook-handler-before-fix.js` | Webhook code before the fix. |
| `code/webhook-handler-after-fix.js` | Webhook code after the fix. |
| `jira/payment-succeeded-order-pending-bug.md` | Simulated Jira bug ticket. |
| `verification-results.md` | Results after applying the fix. |
| `prevention-actions.md` | Actions to prevent similar incidents. |

## Skills demonstrated

- Customer issue investigation
- SQL database investigation
- API and webhook troubleshooting
- Stripe payment-flow analysis
- Log analysis
- Root cause analysis
- Jira bug documentation
- Fix verification
- Production incident prevention

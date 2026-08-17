# Payment Completed but Order Remains Pending

## Purpose

Use this article when a customer says they were charged, but their order still appears as `Pending` or they did not receive an order confirmation.

## Information to collect

| Information | Required |
|---|---|
| Customer email | Yes |
| Order ID | Yes, if available |
| Payment amount | Yes |
| Approximate payment date and time | Yes |
| Screenshot of the order page | Optional |

> Do not ask the customer for full card details.

## First checks

1. Search for the order using the Order ID or customer email.
2. Confirm the order status in the `Orders` table.
3. Check the related record in the `OrderPayments` table.
4. If available, search Stripe Dashboard using the customer email, amount, and payment date.
5. Confirm whether the Stripe payment status is `Succeeded`, `Failed`, or still pending.

## Troubleshooting guide

| Situation | Action |
|---|---|
| Stripe payment failed | Tell the customer that the payment was not completed and ask them to try again. |
| Stripe payment is pending | Explain that the payment is still processing and the order will update after confirmation. |
| Stripe payment succeeded and order is Paid | Confirm the order is complete and resend the receipt if needed. |
| Stripe payment succeeded but order is Pending | Escalate to Technical Support. Include the Order ID, Checkout Session ID, Payment Intent ID, and webhook event details. |
| No order or payment record found | Escalate to Technical Support with the customer email, amount, and payment date. |

## Customer response template

Hello,

Thank you for contacting us. We are checking the payment and order status.

We will update you as soon as possible. Please do not place another order until we confirm the status of this payment.

Thank you.

## Escalation details

Escalate when Stripe shows a successful payment but the order is still `Pending`.

Include:

- Customer email
- Order ID
- Payment amount
- Payment date and time
- Order status
- Payment status
- Checkout Session ID
- Payment Intent ID
- Webhook Event ID
- Relevant logs or screenshots

## Related documentation

- [Webhook order status not updated](../known-issues/webhook-order-status-not-updated.md)
- [Technical escalation template](../templates/technical-escalation-template.md)

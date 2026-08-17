# Payment Declined

## Purpose

Use this article when a customer cannot complete a payment because it was declined.

## Information to collect

| Information | Required |
|---|---|
| Customer email | Yes |
| Order ID | If available |
| Payment amount | Yes |
| Approximate payment date and time | Yes |
| Error message or screenshot | Optional |

> Do not ask the customer for full card details.

## First checks

1. Search for the order using the Order ID or customer email.
2. Check the payment status in `OrderPayments`.
3. If available, check Stripe Dashboard for the payment attempt and decline reason.
4. Confirm that the customer was not charged.

## Troubleshooting guide

| Situation | Action |
|---|---|
| Payment status is `Failed` or `Declined` | Ask the customer to try again with the same or another payment method. |
| Payment is still pending | Explain that the payment is still processing and ask the customer not to retry yet. |
| Customer was charged but payment shows failed | Escalate to Technical Support and Finance. |
| Multiple customers report declined payments | Escalate to Technical Support to investigate Stripe, payment configuration, or application errors. |

## Customer response template

Hello,

We could not complete the payment for your order.

Please try again. If the issue continues, contact your bank or try another payment method.

Thank you.

## Escalation details

Escalate when the customer was charged, the payment status is unclear, or multiple customers report the same issue.

Include:

- Customer email
- Order ID
- Payment amount
- Payment date and time
- Payment status
- Error message
- Stripe Payment Intent ID, if available
- Relevant logs or screenshots

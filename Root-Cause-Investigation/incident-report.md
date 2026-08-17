# Ticket: Payment Completed but Order Remains Pending

> **Note:** This is a simulated portfolio support ticket.

**Ticket ID:** `SIM-INC-001`  
**Status:** Open  
**Priority:** High  
**Category:** Payment / Order Status  
**Reported by:** Customer Support Team  
**Date reported:** 17 August 2026  
**Environment:** Production

## Customer report

A customer completed a payment successfully, and the card was charged. However, the order still appears as `Pending` in ShopSphere.

The customer did not receive the payment-success message or an email receipt.

## Customer details

| Field | Value |
|---|---|
| Customer email | `customer@example.com` |
| Order ID | `ORD-100245` |
| Checkout Session ID | `cs_test_example_100245` |
| Payment Intent ID | `pi_test_example_100245` |
| Payment amount | `$49.99` |
| Payment date | `17 August 2026, 10:42` |

## Expected result

After Stripe confirms that the payment was successful:

- The order status is updated from `Pending` to `Paid`.
- The customer sees a payment-success message.
- A receipt is sent to the customer’s email.

## Actual result

- Stripe shows the payment as successful.
- The customer’s card was charged.
- The order status remains `Pending`.
- No success message is displayed.
- No receipt email is sent.

## Business impact

The customer is unsure whether the order was completed. Support cannot confirm the order without investigating the payment and order records.

## Initial investigation request

Please investigate the payment flow, including:

- Stripe payment status
- Stripe webhook delivery
- Application logs
- `Orders` and `OrderPayments` database records
- Order-status update process

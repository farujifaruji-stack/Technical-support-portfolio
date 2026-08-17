# Stripe Dashboard Review

> **Note:** This is simulated Stripe Dashboard evidence for a portfolio case study.

## Investigation details

| Field | Value |
|---|---|
| Customer email searched | `customer@example.com` |
| Payment amount searched | `$49.99 USD` |
| Approximate payment time | `17 August 2026, 10:42 UTC` |
| Order ID in metadata | `ORD-100245` |

## Payment record

| Field | Stripe Dashboard result |
|---|---|
| Payment Intent ID | `pi_test_100245` |
| Payment status | `Succeeded` |
| Amount | `$49.99 USD` |
| Payment method | Card ending in `4242` |
| Customer email | `customer@example.com` |
| Created | `17 August 2026, 10:43 UTC` |
| Receipt email | Not sent |

## Checkout Session record

| Field | Stripe Dashboard result |
|---|---|
| Checkout Session ID | `cs_test_100245` |
| Checkout status | `Complete` |
| Payment status | `Paid` |
| Payment Intent ID | `pi_test_100245` |
| Order ID metadata | `ORD-100245` |

## Webhook event delivery

| Field | Stripe Dashboard result |
|---|---|
| Event ID | `evt_100245` |
| Event type | `checkout.session.completed` |
| Delivery attempts | `2` |
| First delivery response | `500 Internal Server Error` |
| Retry delivery response | `500 Internal Server Error` |
| Final delivery status | Failed |

## Investigation finding

Stripe successfully processed the payment and created a completed Checkout Session. The issue occurred after the payment, during webhook processing in the ShopSphere application.

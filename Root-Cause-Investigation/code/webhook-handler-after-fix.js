// Simulated webhook handler after the fix.

async function handleCheckoutSessionCompleted(event) {
  const session = event.data.object;

  const checkoutSessionId = session.id;
  const paymentIntentId = session.payment_intent;

  console.log('Processing successful payment webhook');
  console.log('Checkout Session ID:', checkoutSessionId);
  console.log('Payment Intent ID:', paymentIntentId);

  // Find the payment using the identifier already saved in the database.
  const payment = await OrderPayments.findOne({
    where: {
      CheckoutSessionId: checkoutSessionId,
    },
  });

  if (!payment) {
    console.log('No OrderPayments record found:', checkoutSessionId);

    throw new Error('Payment record not found');
  }

  await OrderPayments.update(
    {
      Status: 'Paid',
      StripePaymentId: paymentIntentId,
      DateUpdated: new Date(),
    },
    {
      where: {
        Id: payment.Id,
      },
    }
  );

  await Orders.update(
    {
      OrderStatus: 'Paid',
      FlowStep: 'Authed',
      DateUpdated: new Date(),
    },
    {
      where: {
        Id: payment.OrderId,
      },
    }
  );

  console.log('Payment and order updated successfully');
}

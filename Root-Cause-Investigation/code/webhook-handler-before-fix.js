// Simulated webhook handler before the fix.

async function handleCheckoutSessionCompleted(event) {
  const session = event.data.object;

  const paymentIntentId = session.payment_intent;

  console.log('Processing successful payment webhook');
  console.log('Checkout Session ID:', session.id);
  console.log('Payment Intent ID:', paymentIntentId);

  // The application searches using the Payment Intent ID.
  const payment = await OrderPayments.findOne({
    where: {
      StripePaymentId: paymentIntentId,
    },
  });

  if (!payment) {
    console.log('No OrderPayments record found:', paymentIntentId);

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
}

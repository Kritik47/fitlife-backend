import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51PGBd4SIVAMgmpIN6x1FzkJr1wD8blOvUlXhUY0Ba8soLFHnp4nWO9iHP3pukTtT8TgM9ca1WZk9nNC9siBqebZQ00eYSXnZrH', { apiVersion: '2022-11-15' });
const StripePayment = async (req, res) => {
  try {
    const { Price ,Plan} = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency:'INR',
            product_data: {
              name: Plan,
            },
            unit_amount: Price * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/plan',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export default StripePayment;

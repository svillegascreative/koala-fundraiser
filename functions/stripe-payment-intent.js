require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async (event, callback) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'Invalid HTTP method'
      })
    }
  }

  const data = JSON.parse(event.body)

  if (!data.stripeAmt || !data.stripeCurrency || !data.stripeIdempotency) {
    const message = 'Required information is missing.'

    console.error(message)

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'missing information',
        message
      })
    }
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.stripeAmt,
      currency: data.stripeCurrency,
      payment_method_types: ['card'],
      customer: 'Stripe Test Customer',
      description: 'Koala Fundraiser payment'
    })

    const clientSecret = paymentIntent.client_secret

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: 'it works! beep boop',
        clientSecret
      })
    }
  } catch (error) {
    console.log(error)

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: error
      })
    }
  }
}

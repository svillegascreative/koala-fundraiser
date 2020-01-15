require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async (event) => {
  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'Invalid HTTP method'
      })
    }
  }

  const data = JSON.parse(event.body)

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
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

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'All good',
      event
    })
  }
}

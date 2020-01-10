require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'All good',
      event
    })
  }
}

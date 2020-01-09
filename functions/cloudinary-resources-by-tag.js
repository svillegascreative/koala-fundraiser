require('dotenv').config()

const cloudinary = require('cloudinary').v2
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async (event) => {
  // Check for the right HTTP method
  if (!event.body || event.httpMethod !== 'GET') {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'Invalid HTTP method'
      })
    }
  }

  // Get resources
  try {
    await cloudinary.api.resources_by_tag(
      'print',
      { max_results: 100 },
      function(error, result) {
        console.log(result, error)
      }
    )

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'All good'
      })
    }
  } catch (err) {
    console.log(err)

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: err
      })
    }
  }
}

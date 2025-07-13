import axios from 'axios';

const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Use sandbox for testing
const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

// Get access token from PayPal
async function getAccessToken() {
  const auth = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64');
  const response = await axios({
    url: PAYPAL_API + '/v1/oauth2/token',
    method: 'post',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: 'grant_type=client_credentials',
  });
  return response.data.access_token;
}

// Create order
export async function createOrder(req, res) {
  try {
    const accessToken = await getAccessToken();
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: req.body.amount,
          },
        },
      ],
    };
    const response = await axios({
      url: PAYPAL_API + '/v2/checkout/orders',
      method: 'post',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      data: order,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Capture order
export async function captureOrder(req, res) {
  try {
    const { orderID } = req.params;
    const accessToken = await getAccessToken();
    const response = await axios({
      url: PAYPAL_API + `/v2/checkout/orders/${orderID}/capture`,
      method: 'post',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

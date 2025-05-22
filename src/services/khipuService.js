const axios = require('axios');

const receiverId = process.env.KHIPU_RECEIVER_ID;
const secret = process.env.KHIPU_SECRET;

async function createPayment(amount, subject) {
  const data = {
    receiver_id: receiverId,
    subject: subject,
    amount: amount,
    currency: 'CLP',
    return_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    transaction_id: `demo_${Date.now()}`,
    payer_email: 'test@demo.cl',
    payment_method: null,
    body: 'Pago de prueba integración Khipu',
    bank_id: null
  };

  const auth = Buffer.from(`${receiverId}:${secret}`).toString('base64');
  const headers = {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/json'
  };

  try {
    const res = await axios.post(
      'https://khipu.com/api/2.0/payments',
      data,
      { headers }
    );
    return res.data;
  } catch (err) {
    if (err.response && err.response.data) {
      throw new Error(err.response.data.message || JSON.stringify(err.response.data));
    }
    throw err;
  }
}

module.exports = { createPayment };

const khipuService = require('../services/khipuService');

// POST /api/payments
async function createPayment(req, res) {
  try {
    const { amount, subject } = req.body;

    // Validación simple
    if (!amount || !subject) {
      return res.status(400).json({ error: 'amount y subject son requeridos' });
    }
    if (amount > 5000) {
      return res.status(400).json({ error: 'El monto máximo permitido es $5.000 CLP (demo).' });
    }

    const paymentData = await khipuService.createPayment(amount, subject);
    // Devuelve la URL de pago
    res.json({
      payment_url: paymentData.payment_url,
      payment_id: paymentData.payment_id
    });
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
}

module.exports = { createPayment };

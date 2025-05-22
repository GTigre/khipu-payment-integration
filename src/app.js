require('dotenv').config();
const express = require('express');
const path = require('path');
const paymentController = require('./controllers/paymentController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir frontend estático
app.use(express.static(path.join(__dirname, '..', 'public')));

// API: Crear un cobro Khipu
app.post('/api/payments', paymentController.createPayment);

// Rutas de retorno/cancelación (demo)
app.get('/success', (req, res) => res.send('<h2>Pago realizado exitosamente (simulación).</h2>'));
app.get('/cancel', (req, res) => res.send('<h2>Pago cancelado (simulación).</h2>'));

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

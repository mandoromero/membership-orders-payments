// controllers/paymentController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await prisma.payment.findMany();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPayment = async (req, res) => {
  const { paymentId, plan, expiresAt } = req.body;
  try {
    const payment = await prisma.payment.create({
      data: {
        paymentId,
        plan,
        expiresAt: new Date(expiresAt),
      },
    });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

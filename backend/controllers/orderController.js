// controllers/orderController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOrder = async (req, res) => {
  const { orderId, plan, expiresAt } = req.body;
  try {
    const order = await prisma.order.create({
      data: {
        orderId,
        plan,
        expiresAt: new Date(expiresAt),
      },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

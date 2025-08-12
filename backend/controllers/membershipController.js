// controllers/membershipController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllMemberships = async (req, res) => {
  try {
    const memberships = await prisma.membership.findMany();
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMembership = async (req, res) => {
  const { userId, plan, expiresAt } = req.body;
  try {
    const membership = await prisma.membership.create({
      data: {
        userId,
        plan,
        expiresAt: new Date(expiresAt),
      },
    });
    res.status(201).json(membership);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

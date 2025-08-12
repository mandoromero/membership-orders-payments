const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.membership.createMany({
    data: [
      { userId: 1, plan: 'Gold', expiresAt: new Date('2025-12-31') },
      { userId: 2, plan: 'Silver', expiresAt: new Date('2025-08-31') }
    ]
  })

  await prisma.order.createMany({
    data: [
      { orderId: 'ORD123', plan: 'Gold', expiresAt: new Date('2025-12-31') },
      { orderId: 'ORD124', plan: 'Silver', expiresAt: new Date('2025-08-31') }
    ]
  })

  await prisma.payment.createMany({
    data: [
      { paymentId: 'PAY123', plan: 'Gold', expiresAt: new Date('2025-12-31') },
      { paymentId: 'PAY124', plan: 'Silver', expiresAt: new Date('2025-08-31') }
    ]
  })
}

main()
  .then(() => console.log('Seed data inserted'))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())

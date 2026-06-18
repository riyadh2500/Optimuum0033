const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function run() {
  // Update category image
  const cat = await prisma.category.updateMany({
    where: { name: "How Optimum Works" },
    data: { image: "/categories/image--how-optimum-works.png" },
  });

  // Update quiz image
  const quiz = await prisma.quiz.updateMany({
    where: { title: "Optimum Mechanics" },
    data: { image: "/categories/image--how-optimum-works.png" },
  });

  console.log(`✅ Updated ${cat.count} category, ${quiz.count} quiz → image--how-optimum-works.png`);
  await prisma.$disconnect();
}

run().catch((e) => { console.error(e); process.exit(1); });

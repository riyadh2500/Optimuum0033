const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function run() {
  // Find all "AI Agents & Web3" categories
  const cats = await prisma.category.findMany({
    where: { name: "AI Agents & Web3" },
    include: { quizzes: { include: { questions: { include: { options: true } } } } },
  });

  console.log(`Found ${cats.length} "AI Agents & Web3" categories`);

  if (cats.length <= 1) {
    console.log("Nothing to fix.");
    await prisma.$disconnect();
    return;
  }

  // Keep the first one, delete all others (cascade deletes quizzes/questions/options)
  const keepId = cats[0].id;
  const deleteIds = cats.slice(1).map((c) => c.id);

  console.log(`Keeping: ${keepId}`);
  console.log(`Deleting: ${deleteIds.join(", ")}`);

  // Delete in correct order: options → questions → quizzes → category
  for (const catId of deleteIds) {
    const quizzes = await prisma.quiz.findMany({ where: { categoryId: catId } });
    for (const quiz of quizzes) {
      const questions = await prisma.question.findMany({ where: { quizId: quiz.id } });
      for (const q of questions) {
        await prisma.option.deleteMany({ where: { questionId: q.id } });
      }
      await prisma.question.deleteMany({ where: { quizId: quiz.id } });
      await prisma.quiz.delete({ where: { id: quiz.id } });
    }
    await prisma.categoryStat.deleteMany({ where: { categoryId: catId } });
    await prisma.category.delete({ where: { id: catId } });
    console.log(`✅ Deleted duplicate category: ${catId}`);
  }

  console.log("Done — only one 'AI Agents & Web3' remains.");
  await prisma.$disconnect();
}

run().catch((e) => { console.error(e); process.exit(1); });

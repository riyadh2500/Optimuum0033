const { PrismaClient } = require("@prisma/client");
const q = require("../data/aiAgentsWeb3Questions");
const prisma = new PrismaClient();

async function run() {
  const cat = await prisma.category.create({
    data: {
      name: "AI Agents & Web3",
      description: "How autonomous AI agents are becoming the primary users of blockchain infrastructure.",
      image: "/categories/image--ai-agents-web3.svg",
    },
  });
  const quiz = await prisma.quiz.create({
    data: {
      title: "Agentic Web3",
      description: "Intent-based protocols, Flexnodes for AI, execution abstraction, and Obol OpenClaw.",
      image: "/categories/image--ai-agents-web3.svg",
      categoryId: cat.id,
    },
  });
  for (const qd of q) {
    const question = await prisma.question.create({
      data: { text: qd.text, difficulty: qd.difficulty || "Medium", quizId: quiz.id },
    });
    for (const o of qd.options) {
      await prisma.option.create({
        data: { text: o.text, isCorrect: o.isCorrect, questionId: question.id },
      });
    }
  }
  console.log("Done: AI Agents & Web3 — " + q.length + " questions seeded.");
  await prisma.$disconnect();
}

run().catch((e) => { console.error(e); process.exit(1); });

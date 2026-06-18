const { PrismaClient } = require("@prisma/client");
const rlncQuestions = require("../data/rlncQuestions");
const optimumProtocolQuestions = require("../data/optimumProtocolQuestions");
const web3NetworkingQuestions = require("../data/web3NetworkingQuestions");
const blockchainFundamentalsQuestions = require("../data/blockchainFundamentalsQuestions");
const dataPropagationQuestions = require("../data/dataPropagationQuestions");
const cryptoConsensusQuestions = require("../data/cryptoConsensusQuestions");
const howOptimumWorksQuestions = require("../data/howOptimumWorksQuestions");
const flexnodesQuestions = require("../data/flexnodesQuestions");
const validatorRevenueQuestions = require("../data/validatorRevenueQuestions");
const latencyEconomicsQuestions = require("../data/latencyEconomicsQuestions");
const rlncVsReedSolomonQuestions = require("../data/rlncVsReedSolomonQuestions");
const aiAgentsWeb3Questions = require("../data/aiAgentsWeb3Questions");
const postQuantumQuestions = require("../data/postQuantumQuestions");

const prisma = new PrismaClient();

const categories = [
  {
    name: "RLNC Fundamentals",
    description: "Master Random Linear Network Coding — the core technology powering Optimum.",
    image: "/categories/image--rlnc-fundamentals.svg",
    quizzes: [{ title: "RLNC Basics", description: "Core concepts of RLNC and how it enables efficient data propagation.", image: "/categories/image--rlnc-fundamentals.svg", questions: rlncQuestions }],
  },
  {
    name: "RLNC vs Reed-Solomon",
    description: "Understand why RLNC outperforms classic Reed-Solomon codes in blockchain mesh networks.",
    image: "/categories/image--rlnc-vs-reed-solomon.svg",
    quizzes: [{ title: "Coding Showdown", description: "Simulation results, recoding, compounding losses, DAS — RLNC vs RS head to head.", image: "/categories/image--rlnc-vs-reed-solomon.svg", questions: rlncVsReedSolomonQuestions }],
  },
  {
    name: "Optimum Protocol",
    description: "Learn about the Optimum project, its mission, team, milestones, and ecosystem.",
    image: "/categories/image--optimum-protocol.svg",
    quizzes: [{ title: "Optimum Deep Dive", description: "From MIT origins to OptimumP2P testnet — team, funding, validators, and roadmap.", image: "/categories/image--optimum-protocol.svg", questions: optimumProtocolQuestions }],
  },
  {
    name: "How Optimum Works",
    description: "Deep technical questions on OptimumP2P, Galois Gossip, recoding, DeRAM, and Flexnodes.",
    image: "/categories/image--how-optimum-works.png",
    quizzes: [{ title: "Optimum Mechanics", description: "Coded packets, Gaussian elimination, recoding, DeRAM, and the drop-in upgrade model.", image: "/categories/image--how-optimum-works.png", questions: howOptimumWorksQuestions }],
  },
  {
    name: "Flexnodes",
    description: "How Flexnodes power the decentralized bandwidth marketplace with MOM tokens and no slashing.",
    image: "/categories/image--flexnodes.svg",
    quizzes: [{ title: "Flexnode Network", description: "MOM tokens, slashing elimination, elastic mesh topology, and the bandwidth marketplace.", image: "/categories/image--flexnodes.svg", questions: flexnodesQuestions }],
  },
  {
    name: "Web3 Networking",
    description: "How decentralized networks communicate, propagate data, and handle failures.",
    image: "/categories/image--web3-networking.svg",
    quizzes: [{ title: "P2P & Gossip Protocols", description: "How blockchain nodes broadcast data, limits of Gossipsub, and why networking matters.", image: "/categories/image--web3-networking.svg", questions: web3NetworkingQuestions }],
  },
  {
    name: "Data Propagation",
    description: "How data moves across blockchain networks and why propagation speed matters for security.",
    image: "/categories/image--data-propagation.svg",
    quizzes: [{ title: "Block Propagation & Latency", description: "Block propagation mechanics, orphan blocks, and Optimum's memory layer concept.", image: "/categories/image--data-propagation.svg", questions: dataPropagationQuestions }],
  },
  {
    name: "Latency Economics",
    description: "How blockchain cliff deadlines, variance, and MEV markets create an economics of speed.",
    image: "/categories/image--latency-economics.svg",
    quizzes: [{ title: "Speed is Money", description: "12-second slots, tail latency, the Turbo lane, blob bottlenecks, and latency futures markets.", image: "/categories/image--latency-economics.svg", questions: latencyEconomicsQuestions }],
  },
  {
    name: "Validator Revenue",
    description: "How reducing block propagation latency directly unlocks ETH staking revenue.",
    image: "/categories/image--validator-revenue.svg",
    quizzes: [{ title: "Validator Yield & MP2P", description: "Head votes, MEV bids, PBS, Xatu telemetry, and the $400K uncaptured value story.", image: "/categories/image--validator-revenue.svg", questions: validatorRevenueQuestions }],
  },
  {
    name: "Blockchain Fundamentals",
    description: "The foundational building blocks — consensus, forks, validators, sharding, and the trilemma.",
    image: "/categories/image--blockchain-fundamentals.svg",
    quizzes: [{ title: "Blockchain 101", description: "Merkle trees, finality, PoS, the blockchain trilemma — everything to get started.", image: "/categories/image--blockchain-fundamentals.svg", questions: blockchainFundamentalsQuestions }],
  },
  {
    name: "Crypto & Consensus",
    description: "Cryptographic primitives and consensus mechanisms that secure decentralized networks.",
    image: "/categories/image--crypto-consensus.svg",
    quizzes: [{ title: "Cryptography & PoS", description: "Hash functions, digital signatures, BFT, zero-knowledge proofs, and Casper consensus.", image: "/categories/image--crypto-consensus.svg", questions: cryptoConsensusQuestions }],
  },
  {
    name: "Post-Quantum Security",
    description: "How RLNC and the HUNK protocol protect blockchain networks from quantum computer attacks.",
    image: "/categories/image--post-quantum-security.svg",
    quizzes: [{ title: "HUNK & McEliece", description: "McEliece (1978), HUNK protocol, QEC, Shor's algorithm, and DAS post-quantum applications.", image: "/categories/image--post-quantum-security.svg", questions: postQuantumQuestions }],
  },
  {
    name: "AI Agents & Web3",
    description: "How autonomous AI agents are becoming the primary users of blockchain infrastructure.",
    image: "/categories/image--ai-agents-web3.svg",
    quizzes: [{ title: "Agentic Web3", description: "Intent-based protocols, Flexnodes for AI, execution abstraction, and Obol's OpenClaw.", image: "/categories/image--ai-agents-web3.svg", questions: aiAgentsWeb3Questions }],
  },
];

async function main() {
  console.log("🌱 Starting Optimum seed...\n");
  console.log("🗑️  Clearing existing data...");
  await prisma.categoryStat.deleteMany({});
  await prisma.option.deleteMany({});
  await prisma.question.deleteMany({});
  await prisma.quiz.deleteMany({});
  await prisma.category.deleteMany({});
  console.log("✅ Cleared.\n");

  for (const cat of categories) {
    console.log(`📂 ${cat.name}`);
    const category = await prisma.category.create({ data: { name: cat.name, description: cat.description, image: cat.image } });
    for (const qz of cat.quizzes) {
      const quiz = await prisma.quiz.create({ data: { title: qz.title, description: qz.description, image: qz.image, categoryId: category.id } });
      for (const q of qz.questions) {
        const question = await prisma.question.create({ data: { text: q.text, difficulty: q.difficulty || "Medium", quizId: quiz.id } });
        for (const opt of q.options) {
          await prisma.option.create({ data: { text: opt.text, isCorrect: opt.isCorrect, questionId: question.id } });
        }
      }
      console.log(`   ✅ ${qz.title}: ${qz.questions.length} questions`);
    }
  }

  const totalQ = categories.reduce((a, c) => a + c.quizzes.reduce((b, q) => b + q.questions.length, 0), 0);
  console.log(`\n🎉 Done! ${categories.length} categories · ${totalQ} total questions`);
}

main()
  .catch((e) => { console.error("❌ Seed failed:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

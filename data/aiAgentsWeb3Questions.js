const aiAgentsWeb3Questions = [
  {
    text: "Why are traditional banking systems considered 'hostile' to autonomous AI agents?",
    difficulty: "Medium",
    options: [
      { text: "APIs, credit cards, and KYC requirements are designed for humans and cannot be natively operated by autonomous software", isCorrect: true },
      { text: "Banks charge too many fees for automated transfers", isCorrect: false },
      { text: "Banking APIs are too slow for AI processing speeds", isCorrect: false },
      { text: "Banks don't support multi-signature wallets", isCorrect: false },
    ],
  },
  {
    text: "What three things do blockchains provide that make them the 'native rail' for AI agents?",
    difficulty: "Medium",
    options: [
      { text: "Identity (public keys), capital allocation (smart contracts), and immediate settlement", isCorrect: true },
      { text: "Privacy, speed, and low fees", isCorrect: false },
      { text: "Storage, compute, and networking", isCorrect: false },
      { text: "Governance, staking rewards, and token issuance", isCorrect: false },
    ],
  },
  {
    text: "What is 'intent-based infrastructure' in the context of AI agents on Web3?",
    difficulty: "Medium",
    options: [
      { text: "A model where an AI agent expresses an objective and underlying protocols execute it — e.g. 'secure 5% yield with low risk' — without manual transaction management", isCorrect: true },
      { text: "Smart contracts that predict user intentions from historical data", isCorrect: false },
      { text: "A governance system where token holders vote on protocol direction", isCorrect: false },
      { text: "An AI model trained to detect malicious transaction intent", isCorrect: false },
    ],
  },
  {
    text: "How do Flexnodes support AI agent workloads specifically?",
    difficulty: "Hard",
    options: [
      { text: "By providing dynamic, scalable high-performance infrastructure that can handle large ML task processing and high-frequency on-chain state updates on demand", isCorrect: true },
      { text: "By running AI models directly on-chain using EVM opcodes", isCorrect: false },
      { text: "By storing AI training datasets in a decentralized storage layer", isCorrect: false },
      { text: "By providing GPU compute for AI inference tasks", isCorrect: false },
    ],
  },
  {
    text: "In the 'Agentic Web3' architecture, what replaces the traditional human → wallet → RPC node flow?",
    difficulty: "Medium",
    options: [
      { text: "Objective → AI Agent Solver → Intent-Based Protocol → Automated Settlement", isCorrect: true },
      { text: "Human → Smart Contract → Layer 2 → Bridge", isCorrect: false },
      { text: "AI Model → Oracle → Mempool → Block Builder", isCorrect: false },
      { text: "Agent → Multisig → DAO → Execution Layer", isCorrect: false },
    ],
  },
  {
    text: "What is the core thesis of the AI Agents and decentralized infrastructure discussion between Optimum and Obol?",
    difficulty: "Medium",
    options: [
      { text: "Autonomous agents are transitioning from novelties to becoming the primary end-users of blockchains", isCorrect: true },
      { text: "AI will replace all human validators within 2 years", isCorrect: false },
      { text: "Decentralized AI training will be cheaper than centralized cloud", isCorrect: false },
      { text: "AI agents should be regulated like financial institutions", isCorrect: false },
    ],
  },
  {
    text: "What does Obol's 'OpenClaw' standard aim to achieve?",
    difficulty: "Hard",
    options: [
      { text: "Allow decentralized validation and node operations to integrate with autonomous agents while maintaining high-performance data propagation and security", isCorrect: true },
      { text: "A claw-back mechanism for validator slashing on Ethereum", isCorrect: false },
      { text: "An open-source hardware standard for validator nodes", isCorrect: false },
      { text: "A cross-chain bridge security protocol", isCorrect: false },
    ],
  },
  {
    text: "Why is high-performance data propagation (like Optimum's) specifically important for AI agent use cases on blockchain?",
    difficulty: "Hard",
    options: [
      { text: "AI agents execute at machine speed and require millions of autonomous transactions — slow propagation becomes a critical bottleneck at that scale", isCorrect: true },
      { text: "AI agents need to download full blockchain history frequently", isCorrect: false },
      { text: "AI agents require dedicated block space unavailable to humans", isCorrect: false },
      { text: "Slow propagation prevents AI agents from reading smart contract state", isCorrect: false },
    ],
  },
  {
    text: "What role can machine learning play in autonomous validator node operations according to the Optimum/Obol discussion?",
    difficulty: "Medium",
    options: [
      { text: "Predicting network congestion, optimizing staking yields, and potentially running node operations autonomously", isCorrect: true },
      { text: "Replacing the proof-of-stake consensus mechanism entirely", isCorrect: false },
      { text: "Generating cryptographic keys for new validators", isCorrect: false },
      { text: "Automating governance voting on protocol upgrades", isCorrect: false },
    ],
  },
  {
    text: "What does 'execution abstraction' mean in the context of AI agents on Web3?",
    difficulty: "Medium",
    options: [
      { text: "An AI agent expresses a high-level goal and underlying modular networks handle the complex execution details like gas, routing, and bridging", isCorrect: true },
      { text: "Abstracting smart contract bytecode into human-readable code", isCorrect: false },
      { text: "Moving EVM execution off-chain to reduce gas costs", isCorrect: false },
      { text: "Abstracting blockchain complexity from end users via a unified wallet interface", isCorrect: false },
    ],
  },
];

module.exports = aiAgentsWeb3Questions;

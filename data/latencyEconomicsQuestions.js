const latencyEconomicsQuestions = [
  {
    text: "What is the core question addressed in the paper 'Pricing Innovation Under Latency Constraints'?",
    difficulty: "Medium",
    options: [
      { text: "How much economic value does a coding-based improvement in delivery probability create, and how should it be priced?", isCorrect: true },
      { text: "How to reduce Ethereum gas fees using network coding", isCorrect: false },
      { text: "Whether RLNC is faster than Reed-Solomon in all scenarios", isCorrect: false },
      { text: "How validators should split MEV rewards fairly", isCorrect: false },
    ],
  },
  {
    text: "In Ethereum, what happens if a validator's attestation arrives one millisecond after the 12-second slot deadline?",
    difficulty: "Medium",
    options: [
      { text: "The attestation is worth zero — it is completely excluded from that slot", isCorrect: true },
      { text: "It is included in the next slot with a small penalty", isCorrect: false },
      { text: "The validator receives 50% of the normal reward", isCorrect: false },
      { text: "The network extends the slot deadline automatically", isCorrect: false },
    ],
  },
  {
    text: "Why do blockchain actors care more about worst-case tail latency than average latency?",
    difficulty: "Hard",
    options: [
      { text: "Because the reward is binary — arriving before the hard deadline earns full reward; after earns nothing", isCorrect: true },
      { text: "Because average latency is always zero in well-designed networks", isCorrect: false },
      { text: "Because tail latency affects block size limits", isCorrect: false },
      { text: "Because average speed is already optimized by hardware", isCorrect: false },
    ],
  },
  {
    text: "By how much does RLNC reduce variance in delivery times compared to standard approaches, according to Optimum's testing?",
    difficulty: "Hard",
    options: [
      { text: "7x less variance", isCorrect: true },
      { text: "2x less variance", isCorrect: false },
      { text: "100x less variance", isCorrect: false },
      { text: "No measurable difference in variance", isCorrect: false },
    ],
  },
  {
    text: "What is the 'Turbo' fast lane architecture proposed in Optimum's latency paper?",
    difficulty: "Hard",
    options: [
      { text: "An RLNC overlay that runs alongside legacy unsharded infrastructure, adding a premium fast lane without full migration", isCorrect: true },
      { text: "A dedicated hardware node that bypasses the P2P layer entirely", isCorrect: false },
      { text: "A proof-of-work mining boost for high-priority transactions", isCorrect: false },
      { text: "A centralized CDN for block distribution", isCorrect: false },
    ],
  },
  {
    text: "What are the four payload delivery strategies compared in Optimum's latency paper?",
    difficulty: "Hard",
    options: [
      { text: "Unsharded, Sharded, Fixed-Rate Erasure Coding (Reed-Solomon), and Rateless Network Coding (RLNC)", isCorrect: true },
      { text: "TCP, UDP, WebSocket, and gRPC", isCorrect: false },
      { text: "PoW, PoS, DPoS, and PoH", isCorrect: false },
      { text: "L1, L2, L3, and cross-chain bridges", isCorrect: false },
    ],
  },
  {
    text: "What is the main problem with sharded delivery as described in Optimum's research?",
    difficulty: "Medium",
    options: [
      { text: "Completion is throttled by the slowest shard — one delayed piece holds up the entire message", isCorrect: true },
      { text: "Sharding uses too much disk space on validator nodes", isCorrect: false },
      { text: "Shards cannot be verified cryptographically", isCorrect: false },
      { text: "Sharding requires consensus changes to the protocol", isCorrect: false },
    ],
  },
  {
    text: "How does RLNC address the spam problem in MEV markets?",
    difficulty: "Hard",
    options: [
      { text: "By introducing a priced premium lane, making spam economically costly and ensuring high-value transactions hit target frequencies reliably", isCorrect: true },
      { text: "By encrypting all mempool transactions", isCorrect: false },
      { text: "By limiting the number of transactions per block", isCorrect: false },
      { text: "By requiring validators to manually filter spam", isCorrect: false },
    ],
  },
  {
    text: "What financial primitive does Tarun Chitra predict will emerge as latency becomes financialized?",
    difficulty: "Hard",
    options: [
      { text: "Futures markets on block latency, allowing validators to hedge proposal risks and sell structured latency guarantees", isCorrect: true },
      { text: "Options contracts on gas prices", isCorrect: false },
      { text: "Perpetual swaps on validator APR", isCorrect: false },
      { text: "Spot markets for block space auctioning", isCorrect: false },
    ],
  },
  {
    text: "Why do block builders rationally exclude heavy blob payloads under EIP-4844?",
    difficulty: "Hard",
    options: [
      { text: "To avoid propagation delays and simulation time increases that risk missing slot deadlines", isCorrect: true },
      { text: "Because blobs are not yet supported by the EVM", isCorrect: false },
      { text: "Because blobs reduce staking rewards for validators", isCorrect: false },
      { text: "Because blob fees are always higher than regular gas fees", isCorrect: false },
    ],
  },
];

module.exports = latencyEconomicsQuestions;

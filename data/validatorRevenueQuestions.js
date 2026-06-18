const validatorRevenueQuestions = [
  {
    text: "According to Optimum's research, how much validator revenue improvement does a 50ms latency reduction provide?",
    difficulty: "Medium",
    options: [
      { text: "Approximately 1% boost in overall validator revenue", isCorrect: true },
      { text: "Approximately 10% boost", isCorrect: false },
      { text: "Approximately 0.01% boost", isCorrect: false },
      { text: "No measurable impact on revenue", isCorrect: false },
    ],
  },
  {
    text: "What is the 'head vote' in Ethereum attestations, and why is it the most fragile vote?",
    difficulty: "Hard",
    options: [
      { text: "A vote on the absolute latest block tip — it requires seeing the newest block quickly, averaging only 98.6% accuracy due to propagation delays", isCorrect: true },
      { text: "A vote cast by the block proposer to confirm their own block", isCorrect: false },
      { text: "A governance vote on protocol upgrades", isCorrect: false },
      { text: "The first attestation cast in each epoch", isCorrect: false },
    ],
  },
  {
    text: "What is Optimum's MP2P protocol?",
    difficulty: "Medium",
    options: [
      { text: "A parallel RLNC-based sidecar network that complements GossipSub to boost block propagation speeds for Ethereum validators", isCorrect: true },
      { text: "A new consensus mechanism replacing PoS", isCorrect: false },
      { text: "A mempool privacy protocol", isCorrect: false },
      { text: "A multi-party computation framework for MEV sharing", isCorrect: false },
    ],
  },
  {
    text: "How much ETH annually is currently lost network-wide due to slow block propagation causing missed head votes?",
    difficulty: "Hard",
    options: [
      { text: "1,000 to 2,000 ETH per year", isCorrect: true },
      { text: "100 ETH per year", isCorrect: false },
      { text: "10,000 ETH per year", isCorrect: false },
      { text: "50 ETH per year", isCorrect: false },
    ],
  },
  {
    text: "Under Proposer-Builder Separation (PBS), what is the 'Proposer's Dilemma'?",
    difficulty: "Hard",
    options: [
      { text: "Accepting a bid too early leaves money on the table; waiting too long risks missing the slot deadline and causing a reorg", isCorrect: true },
      { text: "Choosing between building their own block or accepting a builder's bid", isCorrect: false },
      { text: "Deciding whether to slash a dishonest builder", isCorrect: false },
      { text: "Managing the gas limit to maximize transaction inclusion", isCorrect: false },
    ],
  },
  {
    text: "How much more valuable can MEV bids become if a proposer waits an extra 50ms before accepting?",
    difficulty: "Hard",
    options: [
      { text: "Up to 20x more valuable due to the heavy tail distribution of MEV bid values", isCorrect: true },
      { text: "Up to 2x more valuable", isCorrect: false },
      { text: "Exactly 1.5x more valuable on average", isCorrect: false },
      { text: "No difference — MEV values are uniformly distributed", isCorrect: false },
    ],
  },
  {
    text: "What was the approximate uncaptured MEV value unlocked by Optimum's bid optimization in their data sample?",
    difficulty: "Hard",
    options: [
      { text: "~$400,000", isCorrect: true },
      { text: "~$4,000", isCorrect: false },
      { text: "~$4,000,000", isCorrect: false },
      { text: "~$40,000", isCorrect: false },
    ],
  },
  {
    text: "What fraction of active Ethereum stake did Optimum track in their validator revenue research?",
    difficulty: "Medium",
    options: [
      { text: "Approximately one-third of all active Ethereum stake", isCorrect: true },
      { text: "Approximately 1% of stake", isCorrect: false },
      { text: "Approximately 90% of stake", isCorrect: false },
      { text: "The full 100% of active validators", isCorrect: false },
    ],
  },
  {
    text: "Which telemetry database does Optimum use to record exact block arrival timestamps across nodes globally?",
    difficulty: "Medium",
    options: [
      { text: "Xatu, managed by the EthPandaOps team", isCorrect: true },
      { text: "Etherscan API", isCorrect: false },
      { text: "The Graph Protocol", isCorrect: false },
      { text: "Dune Analytics", isCorrect: false },
    ],
  },
  {
    text: "What is the theoretical upper ceiling for head vote accuracy that Optimum's latency improvement approaches?",
    difficulty: "Hard",
    options: [
      { text: "~99.4%, accounting for naturally missed slots", isCorrect: true },
      { text: "100% — perfect attestation accuracy", isCorrect: false },
      { text: "95% — the protocol target", isCorrect: false },
      { text: "98% — current average performance", isCorrect: false },
    ],
  },
];

module.exports = validatorRevenueQuestions;

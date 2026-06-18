const dataPropagationQuestions = [
  {
    text: "What is 'data propagation' in a blockchain network?",
    difficulty: "Easy",
    options: [
      { text: "The process of broadcasting new blocks and transactions to all nodes in the network", isCorrect: true },
      { text: "The process of writing validated data to persistent storage", isCorrect: false },
      { text: "The migration of blockchain state to a new chain", isCorrect: false },
      { text: "The encryption of data before it is sent to validators", isCorrect: false },
    ],
  },
  {
    text: "In Ethereum, what is the typical block propagation speed bottleneck today?",
    difficulty: "Medium",
    options: [
      { text: "Redundant bandwidth usage from the Gossipsub P2P protocol", isCorrect: true },
      { text: "The EVM execution time for complex smart contracts", isCorrect: false },
      { text: "The time to generate SNARK proofs for each block", isCorrect: false },
      { text: "The disk I/O speed on validator nodes", isCorrect: false },
    ],
  },
  {
    text: "How does Optimum's approach transmit less while delivering more?",
    difficulty: "Medium",
    options: [
      { text: "By sending coded packet combinations instead of raw duplicate copies of data", isCorrect: true },
      { text: "By compressing blocks using gzip before transmission", isCorrect: false },
      { text: "By skipping validation of already-seen transactions", isCorrect: false },
      { text: "By batching multiple blocks into a single transmission", isCorrect: false },
    ],
  },
  {
    text: "What does Ethereum's current P2P layer (Gossipsub) currently limit throughput to approximately?",
    difficulty: "Hard",
    options: [
      { text: "~15–30 transactions per second (TPS)", isCorrect: true },
      { text: "~1,000 TPS", isCorrect: false },
      { text: "~100,000 TPS", isCorrect: false },
      { text: "~500 TPS", isCorrect: false },
    ],
  },
  {
    text: "What is 'erasure coding' and how does it relate to data propagation?",
    difficulty: "Hard",
    options: [
      { text: "A technique that adds redundancy so data can be recovered even if some coded pieces are lost", isCorrect: true },
      { text: "A cryptographic method for permanently deleting sensitive data from nodes", isCorrect: false },
      { text: "A consensus rule that removes invalid blocks from the chain", isCorrect: false },
      { text: "A compression algorithm that removes duplicate bytes from block data", isCorrect: false },
    ],
  },
  {
    text: "What happens to validator performance when block propagation is slow?",
    difficulty: "Medium",
    options: [
      { text: "Validators may produce blocks on stale tips, leading to orphaned blocks and wasted computation", isCorrect: true },
      { text: "Validators automatically pause and wait for the network to synchronize", isCorrect: false },
      { text: "Gas prices automatically increase to incentivize faster relaying", isCorrect: false },
      { text: "The protocol switches from PoS to PoW temporarily", isCorrect: false },
    ],
  },
  {
    text: "What is an 'orphan block' (also called uncle block in Ethereum)?",
    difficulty: "Medium",
    options: [
      { text: "A valid block that was produced but not included in the canonical chain due to a competing block winning", isCorrect: true },
      { text: "A block with no transactions inside it", isCorrect: false },
      { text: "A block that failed validation and was rejected by all nodes", isCorrect: false },
      { text: "The genesis block of a blockchain", isCorrect: false },
    ],
  },
  {
    text: "Why is consistent propagation speed more important than peak propagation speed?",
    difficulty: "Hard",
    options: [
      { text: "Inconsistent speeds create unpredictable windows where some validators act on stale state", isCorrect: true },
      { text: "Peak speeds consume too much memory on validator hardware", isCorrect: false },
      { text: "Consistent speed allows for a fixed block time interval", isCorrect: false },
      { text: "Inconsistency triggers the slashing mechanism on PoS networks", isCorrect: false },
    ],
  },
  {
    text: "What is Optimum's 'memory layer' concept in relation to data propagation?",
    difficulty: "Hard",
    options: [
      { text: "A high-speed decentralized layer for storing and accessing data in real-time across nodes", isCorrect: true },
      { text: "An in-memory database for caching smart contract state", isCorrect: false },
      { text: "A RAM upgrade recommended for validator hardware", isCorrect: false },
      { text: "A caching proxy server placed in front of Ethereum RPC nodes", isCorrect: false },
    ],
  },
  {
    text: "What does Optimum mean by 'transmit less, deliver more'?",
    difficulty: "Easy",
    options: [
      { text: "Using efficient coding to reduce redundant data while still ensuring every node receives complete information", isCorrect: true },
      { text: "Reducing block size by removing metadata fields", isCorrect: false },
      { text: "Lowering gas costs by batching messages", isCorrect: false },
      { text: "Compressing validator signatures to save bandwidth", isCorrect: false },
    ],
  },
];

module.exports = dataPropagationQuestions;

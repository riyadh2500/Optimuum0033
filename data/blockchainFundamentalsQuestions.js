const blockchainFundamentalsQuestions = [
  {
    text: "What is a blockchain at its core?",
    difficulty: "Easy",
    options: [
      { text: "A distributed ledger of records linked using cryptographic hashes", isCorrect: true },
      { text: "A centralized database managed by multiple companies", isCorrect: false },
      { text: "A programming language for smart contracts", isCorrect: false },
      { text: "A type of cloud storage service", isCorrect: false },
    ],
  },
  {
    text: "What is the difference between a Layer 1 and a Layer 2 blockchain?",
    difficulty: "Easy",
    options: [
      { text: "L1 is the base chain; L2 is a scaling solution built on top of it", isCorrect: true },
      { text: "L1 handles user transactions; L2 handles validator communication", isCorrect: false },
      { text: "L1 uses proof-of-work; L2 always uses proof-of-stake", isCorrect: false },
      { text: "L1 is public; L2 is always permissioned", isCorrect: false },
    ],
  },
  {
    text: "What is a consensus mechanism?",
    difficulty: "Easy",
    options: [
      { text: "A protocol by which all nodes in a network agree on the current state of the ledger", isCorrect: true },
      { text: "A system for encrypting wallet private keys", isCorrect: false },
      { text: "A method for compressing block data before storage", isCorrect: false },
      { text: "An algorithm for generating new tokens", isCorrect: false },
    ],
  },
  {
    text: "In proof-of-stake (PoS), what do validators stake to participate in consensus?",
    difficulty: "Easy",
    options: [
      { text: "The native cryptocurrency of the network as collateral", isCorrect: true },
      { text: "Computational hardware (GPU/ASIC)", isCorrect: false },
      { text: "Their identity documents for KYC verification", isCorrect: false },
      { text: "Storage space on their hard drive", isCorrect: false },
    ],
  },
  {
    text: "What is a Merkle tree used for in blockchain?",
    difficulty: "Medium",
    options: [
      { text: "Efficiently verifying the integrity and inclusion of transactions in a block", isCorrect: true },
      { text: "Storing validator private keys securely", isCorrect: false },
      { text: "Generating random numbers for consensus leader selection", isCorrect: false },
      { text: "Compressing smart contract bytecode", isCorrect: false },
    ],
  },
  {
    text: "What is 'finality' in the context of a blockchain?",
    difficulty: "Medium",
    options: [
      { text: "The point at which a transaction is considered irreversible and permanently recorded", isCorrect: true },
      { text: "When a block reaches zero gas fees", isCorrect: false },
      { text: "The last block produced before a network upgrade", isCorrect: false },
      { text: "The completion of a smart contract's execution", isCorrect: false },
    ],
  },
  {
    text: "What is a 'fork' in blockchain terminology?",
    difficulty: "Medium",
    options: [
      { text: "A divergence in the blockchain where two or more competing chain versions exist temporarily", isCorrect: true },
      { text: "An upgrade that adds new opcodes to the EVM", isCorrect: false },
      { text: "A copy of a smart contract deployed to a new address", isCorrect: false },
      { text: "A validator that duplicates its vote across two blocks", isCorrect: false },
    ],
  },
  {
    text: "What is a 'validator' in a proof-of-stake network?",
    difficulty: "Easy",
    options: [
      { text: "A node that proposes and attests to new blocks in exchange for rewards", isCorrect: true },
      { text: "A node that only reads blockchain data without participating in consensus", isCorrect: false },
      { text: "A smart contract that verifies off-chain computations", isCorrect: false },
      { text: "A user interface for submitting transactions", isCorrect: false },
    ],
  },
  {
    text: "What problem does sharding aim to solve in blockchains?",
    difficulty: "Hard",
    options: [
      { text: "Scalability — by splitting the network into smaller partitions that process transactions in parallel", isCorrect: true },
      { text: "Privacy — by encrypting each shard separately", isCorrect: false },
      { text: "Decentralization — by reducing the number of validators needed", isCorrect: false },
      { text: "Security — by adding redundant signature verification", isCorrect: false },
    ],
  },
  {
    text: "What is the 'blockchain trilemma' as described by Vitalik Buterin?",
    difficulty: "Hard",
    options: [
      { text: "The difficulty of achieving security, scalability, and decentralization simultaneously", isCorrect: true },
      { text: "The tradeoff between gas price, block time, and network size", isCorrect: false },
      { text: "The impossibility of having fast finality, low cost, and high throughput in L2s", isCorrect: false },
      { text: "The balance between token supply, staking rewards, and inflation", isCorrect: false },
    ],
  },
];

module.exports = blockchainFundamentalsQuestions;

const cryptoConsensusQuestions = [
  {
    text: "What is a cryptographic hash function?",
    difficulty: "Easy",
    options: [
      { text: "A function that maps input data of any size to a fixed-size output in a deterministic, one-way manner", isCorrect: true },
      { text: "A function that encrypts data using a public/private key pair", isCorrect: false },
      { text: "A function that generates random numbers for validator selection", isCorrect: false },
      { text: "A function that compresses data for efficient storage", isCorrect: false },
    ],
  },
  {
    text: "Which hash function does Ethereum primarily use for its Merkle trees and block hashing?",
    difficulty: "Medium",
    options: [
      { text: "Keccak-256 (SHA-3)", isCorrect: true },
      { text: "SHA-256", isCorrect: false },
      { text: "Blake2b", isCorrect: false },
      { text: "MD5", isCorrect: false },
    ],
  },
  {
    text: "What is a digital signature in blockchain?",
    difficulty: "Easy",
    options: [
      { text: "A cryptographic proof that a transaction was authorized by the owner of a private key", isCorrect: true },
      { text: "A visual signature embedded in the block header", isCorrect: false },
      { text: "A multi-party approval required for governance votes", isCorrect: false },
      { text: "An oracle-provided attestation of off-chain events", isCorrect: false },
    ],
  },
  {
    text: "What is BFT (Byzantine Fault Tolerance) in consensus protocols?",
    difficulty: "Medium",
    options: [
      { text: "The ability of a system to reach consensus even when some nodes behave maliciously or fail", isCorrect: true },
      { text: "The maximum number of transactions per block before a fork is triggered", isCorrect: false },
      { text: "The threshold of staked ETH required to finalize a checkpoint", isCorrect: false },
      { text: "A pruning mechanism that removes old chain history", isCorrect: false },
    ],
  },
  {
    text: "What is a zero-knowledge proof (ZKP)?",
    difficulty: "Hard",
    options: [
      { text: "A cryptographic method to prove knowledge of a value without revealing the value itself", isCorrect: true },
      { text: "A proof that a smart contract has zero bugs", isCorrect: false },
      { text: "A transaction signed with an empty private key for testing", isCorrect: false },
      { text: "A consensus vote cast by an offline validator", isCorrect: false },
    ],
  },
  {
    text: "What distinguishes proof-of-work (PoW) from proof-of-stake (PoS)?",
    difficulty: "Easy",
    options: [
      { text: "PoW requires computational effort to produce blocks; PoS requires locking up tokens as collateral", isCorrect: true },
      { text: "PoW is faster; PoS is slower but more secure", isCorrect: false },
      { text: "PoW uses validators; PoS uses miners", isCorrect: false },
      { text: "PoW is decentralized; PoS requires a trusted third party", isCorrect: false },
    ],
  },
  {
    text: "What is 'slashing' in a proof-of-stake network?",
    difficulty: "Medium",
    options: [
      { text: "A penalty that removes part of a validator's staked tokens for dishonest behavior", isCorrect: true },
      { text: "A reward reduction applied during bear markets", isCorrect: false },
      { text: "The process of removing old blocks from the chain", isCorrect: false },
      { text: "A governance mechanism for lowering gas fees", isCorrect: false },
    ],
  },
  {
    text: "What is the role of an 'attestation' in Ethereum's proof-of-stake consensus?",
    difficulty: "Hard",
    options: [
      { text: "A validator's vote confirming that a proposed block is valid and should be included in the chain", isCorrect: true },
      { text: "A notarization of an NFT's ownership on-chain", isCorrect: false },
      { text: "A cryptographic certificate issued to validators by the Ethereum Foundation", isCorrect: false },
      { text: "An off-chain signature used by bridges to authorize cross-chain transfers", isCorrect: false },
    ],
  },
  {
    text: "What is the significance of 'finality' in Ethereum's Casper PoS protocol?",
    difficulty: "Hard",
    options: [
      { text: "Once a checkpoint is finalized, it cannot be reverted without at least 1/3 of all staked ETH being slashed", isCorrect: true },
      { text: "Finalized blocks are automatically compressed and archived", isCorrect: false },
      { text: "Finality means zero gas fees for transactions in that block", isCorrect: false },
      { text: "Finalized checkpoints trigger automatic token burns", isCorrect: false },
    ],
  },
  {
    text: "Why is decentralized consensus particularly important for a network like Optimum?",
    difficulty: "Medium",
    options: [
      { text: "To ensure no single party can censor or manipulate data propagation across the network", isCorrect: true },
      { text: "To reduce the cost of running validator hardware", isCorrect: false },
      { text: "To maximize token price stability", isCorrect: false },
      { text: "To comply with global financial regulations", isCorrect: false },
    ],
  },
];

module.exports = cryptoConsensusQuestions;

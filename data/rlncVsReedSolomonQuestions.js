const rlncVsReedSolomonQuestions = [
  {
    text: "In Optimum's protocol simulation, how much bandwidth does RLNC use compared to the baseline (no coding)?",
    difficulty: "Hard",
    options: [
      { text: "~12x less bandwidth than baseline", isCorrect: true },
      { text: "~2x less bandwidth than baseline", isCorrect: false },
      { text: "~50x less bandwidth than baseline", isCorrect: false },
      { text: "The same bandwidth — RLNC only improves latency, not bandwidth", isCorrect: false },
    ],
  },
  {
    text: "What decode time does RLNC achieve in Optimum's simulation vs ~7 seconds for baseline (no coding)?",
    difficulty: "Medium",
    options: [
      { text: "171 milliseconds (0.171 seconds)", isCorrect: true },
      { text: "3.5 seconds", isCorrect: false },
      { text: "1 second", isCorrect: false },
      { text: "500 milliseconds", isCorrect: false },
    ],
  },
  {
    text: "What is the core reason Reed-Solomon struggles in decentralized mesh networks?",
    difficulty: "Medium",
    options: [
      { text: "It is encoded statically at the source, so intermediate nodes can only forward exact copies, causing redundant shard delivery", isCorrect: true },
      { text: "Reed-Solomon is patented and cannot be used in open-source networks", isCorrect: false },
      { text: "It requires too much CPU to decode on validator hardware", isCorrect: false },
      { text: "It doesn't support variable-length messages", isCorrect: false },
    ],
  },
  {
    text: "How does Muriel Médard describe Reed-Solomon coding using a mathematical analogy?",
    difficulty: "Medium",
    options: [
      { text: "Like a polynomial line — just as two points define a line, you only need a subset of points to reconstruct the original data", isCorrect: true },
      { text: "Like a Merkle tree — data is organized in a hierarchical hash structure", isCorrect: false },
      { text: "Like a matrix multiplication — all rows must be present for decoding", isCorrect: false },
      { text: "Like a cipher — each shard is independently encrypted", isCorrect: false },
    ],
  },
  {
    text: "What does RLNC's 'recoding' capability allow intermediate nodes to do that Reed-Solomon cannot?",
    difficulty: "Hard",
    options: [
      { text: "Forward freshly mixed coded packets without decoding the underlying data first", isCorrect: true },
      { text: "Validate the block's cryptographic signature before forwarding", isCorrect: false },
      { text: "Compress packets to reduce their size before sending", isCorrect: false },
      { text: "Request specific missing shards from the original source", isCorrect: false },
    ],
  },
  {
    text: "In traditional end-to-end erasure codes like Reed-Solomon, what happens to packet losses across multiple hops?",
    difficulty: "Hard",
    options: [
      { text: "Losses compound over every hop like compound interest, degrading overall network quality", isCorrect: true },
      { text: "Losses are automatically recovered at each hop through local retransmission", isCorrect: false },
      { text: "Losses trigger a full block resend from the original proposer", isCorrect: false },
      { text: "Losses are irrelevant because Reed-Solomon is fully erasure-resilient", isCorrect: false },
    ],
  },
  {
    text: "What does it mean for RLNC to be 'practically scale-free' in mesh networks?",
    difficulty: "Hard",
    options: [
      { text: "Network quality is bounded by the single weakest link rather than accumulated losses across all hops", isCorrect: true },
      { text: "RLNC works identically on networks of all sizes without any tuning", isCorrect: false },
      { text: "RLNC requires zero bandwidth overhead regardless of network scale", isCorrect: false },
      { text: "RLNC nodes can join the network without any configuration", isCorrect: false },
    ],
  },
  {
    text: "In the context of Data Availability Sampling (DAS), how many RLNC questions provide equivalent security to 70–150 fixed questions from a traditional coding scheme?",
    difficulty: "Hard",
    options: [
      { text: "Just 2 smart random RLNC questions", isCorrect: true },
      { text: "10 RLNC questions", isCorrect: false },
      { text: "50 RLNC questions", isCorrect: false },
      { text: "The same number — security scales proportionally", isCorrect: false },
    ],
  },
  {
    text: "What is the 'exam analogy' Médard uses to explain why RLNC is superior for Data Availability Sampling?",
    difficulty: "Medium",
    options: [
      { text: "Fixed codes are like a static exam question pool a bad actor can memorize; RLNC creates dynamic custom questions they cannot predict", isCorrect: true },
      { text: "RLNC is like an open-book exam where all answers are publicly available", isCorrect: false },
      { text: "Reed-Solomon is like multiple-choice; RLNC is like essay questions", isCorrect: false },
      { text: "RLNC creates harder questions that require more compute to answer", isCorrect: false },
    ],
  },
  {
    text: "Which blockchains are noted as using end-to-end erasure codes like Reed-Solomon or Raptor codes for block propagation?",
    difficulty: "Medium",
    options: [
      { text: "Solana (Turbine/Firedancer) and Monad", isCorrect: true },
      { text: "Bitcoin and Litecoin", isCorrect: false },
      { text: "Cardano and Polkadot", isCorrect: false },
      { text: "Avalanche and Fantom", isCorrect: false },
    ],
  },
];

module.exports = rlncVsReedSolomonQuestions;

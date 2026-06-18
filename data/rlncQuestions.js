const rlncQuestions = [
  {
    text: "What does RLNC stand for?",
    difficulty: "Easy",
    options: [
      { text: "Random Linear Network Coding", isCorrect: true },
      { text: "Recursive Layered Network Compression", isCorrect: false },
      { text: "Redundant Link Node Cryptography", isCorrect: false },
      { text: "Randomized Ledger Node Communication", isCorrect: false },
    ],
  },
  {
    text: "Which institution invented the RLNC technology that powers Optimum?",
    difficulty: "Easy",
    options: [
      { text: "MIT", isCorrect: true },
      { text: "Stanford University", isCorrect: false },
      { text: "Harvard University", isCorrect: false },
      { text: "ETH Zurich", isCorrect: false },
    ],
  },
  {
    text: "In RLNC, data packets are combined using which mathematical operation?",
    difficulty: "Medium",
    options: [
      { text: "Random linear combinations over a finite field", isCorrect: true },
      { text: "XOR hashing over binary trees", isCorrect: false },
      { text: "RSA encryption over prime fields", isCorrect: false },
      { text: "Polynomial interpolation over real numbers", isCorrect: false },
    ],
  },
  {
    text: "What is a primary advantage of RLNC over traditional gossip-based P2P networking?",
    difficulty: "Medium",
    options: [
      { text: "Reduces redundant packet retransmissions, improving bandwidth efficiency", isCorrect: true },
      { text: "Eliminates the need for validator nodes entirely", isCorrect: false },
      { text: "Encrypts all packets using zero-knowledge proofs", isCorrect: false },
      { text: "Replaces TCP/IP with a custom transport layer", isCorrect: false },
    ],
  },
  {
    text: "In RLNC terminology, what is a 'generation'?",
    difficulty: "Hard",
    options: [
      { text: "A set of data packets that are linearly combined together", isCorrect: true },
      { text: "A consensus round in proof-of-stake", isCorrect: false },
      { text: "A block finalization epoch", isCorrect: false },
      { text: "A validator rotation period", isCorrect: false },
    ],
  },
  {
    text: "How does RLNC handle packet loss in unreliable networks?",
    difficulty: "Medium",
    options: [
      { text: "Any sufficient number of coded packets can reconstruct the original data", isCorrect: true },
      { text: "It retransmits the exact lost packet from the original sender", isCorrect: false },
      { text: "It uses checksum correction to rebuild the lost data locally", isCorrect: false },
      { text: "It waits for a network timeout then requests all packets again", isCorrect: false },
    ],
  },
  {
    text: "What field of mathematics underpins RLNC's coding vectors?",
    difficulty: "Hard",
    options: [
      { text: "Finite field (Galois field) arithmetic", isCorrect: true },
      { text: "Euclidean geometry", isCorrect: false },
      { text: "Differential calculus", isCorrect: false },
      { text: "Set theory", isCorrect: false },
    ],
  },
  {
    text: "RLNC is described as 'rateless' because:",
    difficulty: "Hard",
    options: [
      { text: "It can generate an unlimited number of encoded packets from a fixed data block", isCorrect: true },
      { text: "It transmits data without any rate-limiting protocol", isCorrect: false },
      { text: "It does not use a fixed encoding rate per second", isCorrect: false },
      { text: "It bypasses rate limits imposed by Internet Service Providers", isCorrect: false },
    ],
  },
  {
    text: "Which of the following best describes 'innovative packets' in RLNC?",
    difficulty: "Hard",
    options: [
      { text: "Packets that carry new linearly independent information to the receiver", isCorrect: true },
      { text: "Packets that have been encrypted with a new key pair", isCorrect: false },
      { text: "The first packet in every generation", isCorrect: false },
      { text: "Packets that have never been transmitted before", isCorrect: false },
    ],
  },
  {
    text: "Optimum's RLNC approach is particularly beneficial for blockchain because it:",
    difficulty: "Easy",
    options: [
      { text: "Speeds up block propagation across the validator network", isCorrect: true },
      { text: "Mints new tokens automatically as a reward", isCorrect: false },
      { text: "Compresses smart contract bytecode", isCorrect: false },
      { text: "Replaces proof-of-work with coding complexity", isCorrect: false },
    ],
  },
];

module.exports = rlncQuestions;

const howOptimumWorksQuestions = [
  {
    text: "What is the internal name for Optimum's RLNC-based gossip mechanism?",
    difficulty: "Hard",
    options: [
      { text: "Galois Gossip (mump2p)", isCorrect: true },
      { text: "OptimumRelay", isCorrect: false },
      { text: "CodeCast", isCorrect: false },
      { text: "RLNCsub", isCorrect: false },
    ],
  },
  {
    text: "Which existing P2P protocol does OptimumP2P build on top of?",
    difficulty: "Medium",
    options: [
      { text: "libp2p's GossipSub", isCorrect: true },
      { text: "Ethereum's devp2p/RLPx", isCorrect: false },
      { text: "IPFS BitSwap", isCorrect: false },
      { text: "WebRTC DataChannel", isCorrect: false },
    ],
  },
  {
    text: "In OptimumP2P, what does 'recoding' mean?",
    difficulty: "Hard",
    options: [
      { text: "An intermediate node re-encodes received coded packets into new combinations without fully decoding first", isCorrect: true },
      { text: "A validator re-signs a block after receiving it", isCorrect: false },
      { text: "The network replays transactions to verify state", isCorrect: false },
      { text: "A node rewrites its routing table when a peer disconnects", isCorrect: false },
    ],
  },
  {
    text: "What mathematical operation do receivers use to reconstruct the original block from coded RLNC packets?",
    difficulty: "Hard",
    options: [
      { text: "Gaussian elimination", isCorrect: true },
      { text: "Fast Fourier Transform (FFT)", isCorrect: false },
      { text: "SHA-256 inversion", isCorrect: false },
      { text: "Modular exponentiation", isCorrect: false },
    ],
  },
  {
    text: "What is an 'innovative packet' in the context of OptimumP2P?",
    difficulty: "Hard",
    options: [
      { text: "A coded packet that carries new linearly independent information not yet held by the receiver", isCorrect: true },
      { text: "The first packet broadcast by the block producer", isCorrect: false },
      { text: "A packet encrypted with a one-time key", isCorrect: false },
      { text: "A packet that bypasses routing for low-latency delivery", isCorrect: false },
    ],
  },
  {
    text: "How does OptimumP2P handle malicious nodes that corrupt transmitted data?",
    difficulty: "Hard",
    options: [
      { text: "RLNC's linear independence property and verification mechanisms detect and isolate corrupted packets", isCorrect: true },
      { text: "All packets are encrypted end-to-end so corruption is impossible", isCorrect: false },
      { text: "The protocol blacklists any node that sends a single bad packet", isCorrect: false },
      { text: "Validators sign every individual coded packet", isCorrect: false },
    ],
  },
  {
    text: "What is a 'generation' in RLNC as used by Optimum?",
    difficulty: "Medium",
    options: [
      { text: "A fixed-size group of data fragments that are linearly combined together in one coding round", isCorrect: true },
      { text: "A consensus epoch in Ethereum's proof-of-stake", isCorrect: false },
      { text: "A validator committee for one slot", isCorrect: false },
      { text: "A batch of transactions in the mempool", isCorrect: false },
    ],
  },
  {
    text: "What is Optimum DeRAM?",
    difficulty: "Medium",
    options: [
      { text: "A decentralized atomic read/write shared memory layer for blockchains, powered by RLNC", isCorrect: true },
      { text: "A hardware RAM upgrade recommended for Ethereum validators", isCorrect: false },
      { text: "A decentralized autonomous market for memory chip manufacturing", isCorrect: false },
      { text: "A caching proxy that stores Ethereum state locally", isCorrect: false },
    ],
  },
  {
    text: "What role do Flexnodes play in the Optimum network?",
    difficulty: "Medium",
    options: [
      { text: "Permissionless participants who provide bandwidth and memory services, earning rewards like RAM in a computer", isCorrect: true },
      { text: "Validator nodes that run both Ethereum consensus and Optimum coding", isCorrect: false },
      { text: "Oracle nodes that feed off-chain price data to smart contracts", isCorrect: false },
      { text: "Bridge relayers that move assets between L1 and L2", isCorrect: false },
    ],
  },
  {
    text: "What is the key advantage of OptimumP2P being a 'drop-in upgrade' for validators?",
    difficulty: "Easy",
    options: [
      { text: "No changes to consensus rules or smart contracts are required — validators just update their P2P layer", isCorrect: true },
      { text: "It upgrades the EVM to support RLNC opcodes automatically", isCorrect: false },
      { text: "It requires validators to swap from PoS to a new consensus mechanism", isCorrect: false },
      { text: "It replaces the mempool with a coded transaction pool", isCorrect: false },
    ],
  },
  {
    text: "Why can RLNC recover data even when some coded packets are lost in transit?",
    difficulty: "Medium",
    options: [
      { text: "Because any sufficient number of linearly independent coded packets contains enough information to reconstruct the original", isCorrect: true },
      { text: "Because each coded packet contains a complete backup copy of the data", isCorrect: false },
      { text: "Because lost packets are automatically re-sent by the block producer", isCorrect: false },
      { text: "Because the protocol uses Reed-Solomon error correction on each individual packet", isCorrect: false },
    ],
  },
  {
    text: "How does Optimum describe its long-term vision for what it's building?",
    difficulty: "Easy",
    options: [
      { text: "A Universal Data Acceleration Network — the missing memory layer for any blockchain", isCorrect: true },
      { text: "A Layer 2 rollup for Ethereum with sub-second finality", isCorrect: false },
      { text: "A decentralized CDN for serving static Web3 front-ends", isCorrect: false },
      { text: "A cross-chain bridge aggregator for DeFi applications", isCorrect: false },
    ],
  },
];

module.exports = howOptimumWorksQuestions;

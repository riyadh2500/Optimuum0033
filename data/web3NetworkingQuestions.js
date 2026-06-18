const web3NetworkingQuestions = [
  {
    text: "What does P2P stand for in the context of blockchain networking?",
    difficulty: "Easy",
    options: [
      { text: "Peer-to-Peer", isCorrect: true },
      { text: "Protocol-to-Protocol", isCorrect: false },
      { text: "Packet-to-Packet", isCorrect: false },
      { text: "Proof-to-Proof", isCorrect: false },
    ],
  },
  {
    text: "What is 'Gossipsub' in the context of Ethereum's P2P network?",
    difficulty: "Medium",
    options: [
      { text: "A publish-subscribe messaging protocol for broadcasting data across nodes", isCorrect: true },
      { text: "A smart contract event emitter library", isCorrect: false },
      { text: "An off-chain oracle data subscription service", isCorrect: false },
      { text: "A validator slashing mechanism", isCorrect: false },
    ],
  },
  {
    text: "What is the main problem with Gossipsub-based block propagation at scale?",
    difficulty: "Medium",
    options: [
      { text: "Nodes redundantly forward the same packets, wasting bandwidth", isCorrect: true },
      { text: "It requires all validators to be online simultaneously", isCorrect: false },
      { text: "It encrypts all traffic making verification impossible", isCorrect: false },
      { text: "It only works on proof-of-work chains", isCorrect: false },
    ],
  },
  {
    text: "What is a 'mempool' in blockchain networking?",
    difficulty: "Easy",
    options: [
      { text: "A waiting area for unconfirmed transactions before they are included in a block", isCorrect: true },
      { text: "A storage layer for finalized state data", isCorrect: false },
      { text: "A pool of available validator slots", isCorrect: false },
      { text: "A cache for previously downloaded blocks", isCorrect: false },
    ],
  },
  {
    text: "What is block propagation latency?",
    difficulty: "Easy",
    options: [
      { text: "The time it takes for a newly produced block to reach all nodes in the network", isCorrect: true },
      { text: "The delay between submitting a transaction and wallet confirmation", isCorrect: false },
      { text: "The time to finalize a block on a Layer 2", isCorrect: false },
      { text: "The interval between consecutive block productions", isCorrect: false },
    ],
  },
  {
    text: "Why is reducing block propagation time important for a blockchain's security?",
    difficulty: "Hard",
    options: [
      { text: "Faster propagation reduces the chance of forks caused by validators working on stale chain tips", isCorrect: true },
      { text: "It lowers the gas fees for end users", isCorrect: false },
      { text: "It prevents Sybil attacks on the validator set", isCorrect: false },
      { text: "It increases the staking yield for validators", isCorrect: false },
    ],
  },
  {
    text: "What is 'bandwidth overhead' in P2P blockchain networks?",
    difficulty: "Medium",
    options: [
      { text: "The extra data transmitted beyond what is strictly necessary due to redundancy", isCorrect: true },
      { text: "The total block size in kilobytes", isCorrect: false },
      { text: "The computational load on the CPU during block validation", isCorrect: false },
      { text: "The disk space used by the blockchain state", isCorrect: false },
    ],
  },
  {
    text: "Which of the following best describes a 'decentralized network topology'?",
    difficulty: "Medium",
    options: [
      { text: "A network where no single node controls routing and all nodes communicate directly", isCorrect: true },
      { text: "A network managed by a central load balancer", isCorrect: false },
      { text: "A network where only elected validators can relay messages", isCorrect: false },
      { text: "A star topology with a central relay server", isCorrect: false },
    ],
  },
  {
    text: "What does 'throughput' mean in the context of blockchain networking?",
    difficulty: "Easy",
    options: [
      { text: "The amount of data or number of transactions processed per unit of time", isCorrect: true },
      { text: "The maximum block size allowed by the protocol", isCorrect: false },
      { text: "The number of validator nodes in the network", isCorrect: false },
      { text: "The rate at which new tokens are issued", isCorrect: false },
    ],
  },
  {
    text: "What is 'network partitioning' and why is it a concern for blockchains?",
    difficulty: "Hard",
    options: [
      { text: "When network disruptions split nodes into isolated groups, risking conflicting chain states", isCorrect: true },
      { text: "When a validator splits their stake across multiple validator nodes", isCorrect: false },
      { text: "When a smart contract deploys to multiple shards simultaneously", isCorrect: false },
      { text: "When Layer 2 rollup proofs fail to post to Layer 1", isCorrect: false },
    ],
  },
];

module.exports = web3NetworkingQuestions;

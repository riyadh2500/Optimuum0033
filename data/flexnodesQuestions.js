const flexnodesQuestions = [
  {
    text: "What is a Flexnode in the Optimum network?",
    difficulty: "Easy",
    options: [
      { text: "Any network participant that actively transmits encoded data equations, earning rewards for their bandwidth contribution", isCorrect: true },
      { text: "A validator that runs both Ethereum consensus and Optimum coding simultaneously", isCorrect: false },
      { text: "A specialized ASIC hardware device for RLNC encoding", isCorrect: false },
      { text: "A smart contract that routes transactions on-chain", isCorrect: false },
    ],
  },
  {
    text: "What token do validators pay to Flexnodes for their data streaming services?",
    difficulty: "Medium",
    options: [
      { text: "MOM tokens", isCorrect: true },
      { text: "ETH", isCorrect: false },
      { text: "OPTM tokens", isCorrect: false },
      { text: "FLEX tokens", isCorrect: false },
    ],
  },
  {
    text: "What happens to a Flexnode operator when they go offline (e.g., close their laptop)?",
    difficulty: "Easy",
    options: [
      { text: "They simply stop earning rewards — they are never slashed or penalized financially", isCorrect: true },
      { text: "They are slashed and lose part of their staked tokens", isCorrect: false },
      { text: "Their node is permanently banned from the network", isCorrect: false },
      { text: "They must pay a reconnection fee to rejoin", isCorrect: false },
    ],
  },
  {
    text: "Why does Optimum's Flexnode architecture eliminate the need for slashing mechanisms?",
    difficulty: "Medium",
    options: [
      { text: "Because validators rely on multiple Flexnodes simultaneously — one going offline doesn't break the system, so punishment is unnecessary", isCorrect: true },
      { text: "Because Flexnodes don't hold any staked tokens to slash", isCorrect: false },
      { text: "Because the network uses a reputation system instead of economic penalties", isCorrect: false },
      { text: "Because slashing is illegal in most jurisdictions", isCorrect: false },
    ],
  },
  {
    text: "How does an Ethereum validator benefit from using Flexnodes for block delivery?",
    difficulty: "Medium",
    options: [
      { text: "It simultaneously pulls distinct encoded equations from multiple nearby Flexnodes, reconstructing the full block faster than any single path allows", isCorrect: true },
      { text: "It bypasses the mempool entirely for faster transaction inclusion", isCorrect: false },
      { text: "It receives pre-validated blocks without running its own EVM", isCorrect: false },
      { text: "It earns bonus staking rewards for using Optimum's network", isCorrect: false },
    ],
  },
  {
    text: "What makes Flexnodes 'flexible' in terms of resource contribution?",
    difficulty: "Medium",
    options: [
      { text: "They can dynamically adjust how much throughput or how many data equations they contribute based on their current available bandwidth", isCorrect: true },
      { text: "They can switch between being validators and non-validators at any time", isCorrect: false },
      { text: "They support multiple blockchain networks simultaneously", isCorrect: false },
      { text: "They automatically upgrade their hardware when network demand increases", isCorrect: false },
    ],
  },
  {
    text: "What is the key advantage of the Flexnode mesh over a standard tree topology for block distribution?",
    difficulty: "Medium",
    options: [
      { text: "If one branch or node fails in a tree, downstream nodes stall; in a Flexnode mesh, remaining nodes self-heal and continue propagating data", isCorrect: true },
      { text: "Tree topologies use more electricity than mesh networks", isCorrect: false },
      { text: "Flexnode meshes don't require any networking hardware", isCorrect: false },
      { text: "Standard trees cannot handle encrypted data", isCorrect: false },
    ],
  },
  {
    text: "Can a Flexnode operator be purely a bandwidth provider with no interest in validating Ethereum?",
    difficulty: "Easy",
    options: [
      { text: "Yes — some Flexnodes are dedicated infrastructure nodes that only route data and earn MOM tokens without participating in consensus", isCorrect: true },
      { text: "No — all Flexnode operators must also run an Ethereum validator", isCorrect: false },
      { text: "No — Flexnodes must hold and stake ETH to participate", isCorrect: false },
      { text: "Yes, but only on testnets — mainnet requires validator status", isCorrect: false },
    ],
  },
  {
    text: "Why doesn't a validator using Flexnodes need to coordinate which specific data pieces to request?",
    difficulty: "Hard",
    options: [
      { text: "Because data is encoded into equations — the validator just collects any sufficient set of linear combinations from any Flexnode and decodes the full block", isCorrect: true },
      { text: "Because Flexnodes use a centralized coordinator to assign data pieces", isCorrect: false },
      { text: "Because all Flexnodes hold identical copies of the full block", isCorrect: false },
      { text: "Because the validator already knows the block hash before receiving it", isCorrect: false },
    ],
  },
  {
    text: "What does Optimum's Flexnode architecture compare to in a traditional computer analogy?",
    difficulty: "Medium",
    options: [
      { text: "RAM and a memory bus — Flexnodes provide fast, decentralized memory and data routing just like RAM serves a CPU", isCorrect: true },
      { text: "A CPU's L1 cache — extremely fast but very limited capacity", isCorrect: false },
      { text: "A hard drive — large storage with slow access times", isCorrect: false },
      { text: "A GPU — massively parallel processing for smart contracts", isCorrect: false },
    ],
  },
];

module.exports = flexnodesQuestions;

const postQuantumQuestions = [
  {
    text: "What is the McEliece cryptosystem, and why is it quantum-resistant?",
    difficulty: "Hard",
    options: [
      { text: "A code-based cryptosystem relying on the NP-hard problem of decoding an arbitrary linear code — immune to Shor's algorithm", isCorrect: true },
      { text: "A lattice-based system that uses shortest vector problems", isCorrect: false },
      { text: "A hash-based signature scheme similar to SPHINCS+", isCorrect: false },
      { text: "An elliptic curve system with post-quantum key sizes", isCorrect: false },
    ],
  },
  {
    text: "When was the McEliece cryptosystem invented?",
    difficulty: "Medium",
    options: [
      { text: "1978, by Robert McEliece", isCorrect: true },
      { text: "2001, after Shor's algorithm was published", isCorrect: false },
      { text: "1994, alongside the invention of RSA", isCorrect: false },
      { text: "2016, as part of NIST's post-quantum competition", isCorrect: false },
    ],
  },
  {
    text: "What is the main practical drawback of the McEliece cryptosystem for network applications?",
    difficulty: "Medium",
    options: [
      { text: "Extremely large public key sizes (hundreds of kilobytes to megabytes), causing huge bandwidth and routing overhead", isCorrect: true },
      { text: "It requires quantum hardware to encrypt messages", isCorrect: false },
      { text: "It is too slow for real-time applications due to SHA-3 dependency", isCorrect: false },
      { text: "It only supports symmetric encryption, not key exchange", isCorrect: false },
    ],
  },
  {
    text: "How does RLNC reduce the compute overhead of post-quantum cryptography in Médard's HUNK protocol?",
    difficulty: "Hard",
    options: [
      { text: "By encrypting only a small fraction of the linear equations (e.g. 1 out of 3) while leaving the rest unencrypted — an attacker with fewer than n equations cannot solve the system", isCorrect: true },
      { text: "By replacing McEliece with a lighter symmetric cipher", isCorrect: false },
      { text: "By encrypting each packet separately with a different key", isCorrect: false },
      { text: "By compressing packets before applying PQC algorithms", isCorrect: false },
    ],
  },
  {
    text: "In the HUNK protocol, if data is split into 3 equations and an attacker intercepts 2 of them, what information can they extract?",
    difficulty: "Hard",
    options: [
      { text: "Zero — a system of 3 unknowns with only 2 equations has infinitely many solutions, leaking nothing", isCorrect: true },
      { text: "Two-thirds of the original data", isCorrect: false },
      { text: "The attacker can brute-force the remaining equation easily", isCorrect: false },
      { text: "All data — intercepting any 2 of 3 is sufficient to reconstruct", isCorrect: false },
    ],
  },
  {
    text: "What are the two roles RLNC plays in quantum cryptography, as highlighted by Médard's research?",
    difficulty: "Hard",
    options: [
      { text: "Building quantum error correction systems AND defending against quantum adversaries in classical networks", isCorrect: true },
      { text: "Encrypting quantum key distribution AND decoding quantum measurements", isCorrect: false },
      { text: "Replacing qubits AND replacing classical bits simultaneously", isCorrect: false },
      { text: "Accelerating quantum computing AND slowing classical attacks", isCorrect: false },
    ],
  },
  {
    text: "What is Quantum Error Correction (QEC) and how does RLNC relate to it?",
    difficulty: "Hard",
    options: [
      { text: "QEC maps a single logical qubit across many physical qubits using error control codes to protect against decoherence — RLNC provides the mathematical structure for this", isCorrect: true },
      { text: "QEC is a post-quantum encryption standard that RLNC replaces", isCorrect: false },
      { text: "QEC uses RLNC to compress quantum circuit descriptions", isCorrect: false },
      { text: "QEC applies RLNC to reduce quantum gate error rates", isCorrect: false },
    ],
  },
  {
    text: "What compute/bandwidth savings does the HUNK protocol achieve by encrypting only 1 in 100 equations?",
    difficulty: "Hard",
    options: [
      { text: "Up to 99% reduction in PQC compute and bandwidth overhead", isCorrect: true },
      { text: "50% reduction in overhead", isCorrect: false },
      { text: "10x reduction in overhead", isCorrect: false },
      { text: "No reduction — all equations must still be encrypted for security", isCorrect: false },
    ],
  },
  {
    text: "Why is Shor's algorithm a threat to RSA and ECC but NOT to the McEliece cryptosystem?",
    difficulty: "Hard",
    options: [
      { text: "RSA/ECC rely on the hidden subgroup problem which Shor's solves; McEliece relies on syndrome decoding hardness which Shor's cannot attack", isCorrect: true },
      { text: "McEliece uses longer keys that Shor's algorithm cannot factor", isCorrect: false },
      { text: "McEliece is symmetric while RSA/ECC are asymmetric", isCorrect: false },
      { text: "Shor's algorithm only works on prime number factorization, not on all cryptography", isCorrect: false },
    ],
  },
  {
    text: "How does Optimum apply RLNC to Data Availability Sampling (DAS) in modular blockchains?",
    difficulty: "Hard",
    options: [
      { text: "Nodes dynamically generate coded data on-the-fly to prove data completeness without bearing heavy cryptographic proof verification overhead", isCorrect: true },
      { text: "Validators encrypt each data shard separately using McEliece", isCorrect: false },
      { text: "RLNC replaces ZK-proofs for data availability verification", isCorrect: false },
      { text: "Nodes broadcast full block data redundantly to every peer", isCorrect: false },
    ],
  },
];

module.exports = postQuantumQuestions;

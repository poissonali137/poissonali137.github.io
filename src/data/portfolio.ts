export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Gated Transformer Model",
    description: "Implemented a novel transformer architecture inspired by brain-selective communication patterns, introducing a learnable gating mechanism based on layer hidden states. While maintaining baseline GPT-2 performance, this exploration suggests potential applications in Mixture of Experts (MoE) models.",
    technologies: ["Python", "PyTorch", "Transformers", "Deep Learning", "Neural Architecture Design"],
    codeUrl: "https://github.com/poissonali137/experiments/blob/main/GatedTransformer"
  },
  {
    title: "Fast Approximation of Lévy Processes with Diffusion Models",
    description:
      "Developed a neural network approach to simulate Lévy processes up to 10,000x faster than numerical methods, leveraging Lévy-Ito decomposition and universal approximation theorems for provable convergence guarantees.",
    technologies: ["Python", "PyTorch", "Stochastic Calculus", "Probability Theory"],
    projectUrl: "/projects/levy_processes.pdf"
  },
  {
    title: "Recurrent Transformers for Weak-to-Strong Generalization",
    description: "Replicated and extended research on achieving weak-to-strong generalization through stacked transformers with additive residual connections. Successfully demonstrated effectiveness on arithmetic tasks using Abacus embeddings, while exploring integration with gated transformers for dynamic recurrence and exit strategies.",
    technologies: ["Python", "PyTorch", "Transformers", "Deep Learning", "Mathematical Reasoning"],
    codeUrl: "https://github.com/poissonali137/experiments/tree/main/RecurrentTransformer"
  },
  {
    title: "Emacs-Based AI Coding Assistant",
    description: "I was annoyed by having to use VSCode etc. for AI tools so I built a Cursor clone in Emacs using Elisp, featuring a local code RAG system integrated with LSP bindings, vector embeddings in pgvector, and an intelligent code modification interface. Created to provide a more customizable and efficient AI-powered development environment within Emacs.",
    technologies: ["Emacs Lisp", "PostgreSQL", "Vector Embeddings", "LSP", "RAG Systems"],
  },
  {
    title: "AIMO 2 Competition Solution (In Progress)",
    description: "Developing an advanced mathematical problem-solving system for the XTX Markets AIMO 2 competition on Kaggle. Utilizing GRPO-finetuned DeepSeekMath to tackle 26 complex mathematical problems, focusing on enhancing mathematical reasoning capabilities.",
    technologies: ["Python", "DeepSeekMath", "GRPO", "Mathematical Reasoning", "Competition ML"],
  },
  {
    title: "Recursive Tree Diffusion For Program Synthesis",
    description:
      "Research project exploring tree diffusion models for generating syntactically valid code by modeling abstract syntax trees recursively, enabling more reliable program synthesis.",
    technologies: ["Python", "PyTorch", "NLP", "Program Synthesis"],
  },
];

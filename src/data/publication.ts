export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2024",
    conference: "NeurIPS Math-AI Workshop",
    title: "Probabilistic Proof State Compression: Optimizing LLM-Guided Formal Verification",
    authors: "Ali Rahim",
    tldr: "Novel compression methods that improve the interpretability of formal reasoning, enabling humans to better understand reasoning trajectories in AI-generated proofs.",
    paperUrl: "https://openreview.net/pdf?id=x2yiUEH0f9"
  },
  {
    year: "2024",
    conference: "EaGL Workshop",
    title: "What formal languages can transformers learn in context?",
    authors: "Ali Rahim, Noor Rahim",
    tldr: "Investigated the ability of LLMs to learn and reason about formal languages across the Chomsky hierarchy, derived empirical and theoretical bounds on number of samples needed to generate from a given language.",
    paperUrl: "/papers/eagl_poster.pdf"
  },
  {
    year: "2021",
    conference: "BraTS Challenge Proceedings",
    title: "Efficient Training of Group Equivariant Vision Transformer for Medical Image Segmentation",
    authors: "Ali Rahim, Noor Rahim, Akm Rahman",
    // award: "🏆",
  },
];

export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
  award?: string;
}

export const newsData: News[] = [
  {
    date: "February 2025",
    title: "🏆 Ranked 238 in William Lowell Putnam Examination",
    description: "Ranked 238 across North America in the prestigious William Lowell Putnam Mathematical Competition with a score of 32.",
  },
  {
    date: "December 2024",
    title: "🎓 Graduated!",
    description: "Graduated from University of Rochester with an Honors BS in Mathematics."
  },
  {
    date: "December 2024",
    title: "📝 NeurIPS Math-AI Workshop Publication",
    description: "Research on 'Probabilistic Proof State Compression' accepted at NeurIPS Math-AI Workshop 2024."
  },
  {
    date: "2021",
    title: "🧠 BraTS Challenge",
    description: "Placed 4th out of 300+ teams in the Brain Tumor Segmentation Challenge 2021.",
  },
  {
    date: "2018",
    title: "🏛️ Full Ride Scholarship",
    description: "Awarded Full Ride Scholarship to attend University of Rochester by Next Genius Foundation, selected from 50,000+ students."
  }
];

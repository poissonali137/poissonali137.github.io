export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Dec 2023 - Present",
    title: "Research Project Lead, Machine Learning for Formal Mathematics",
    company: "University of Rochester",
    description:
      "Led research on formal verification systems using LLMs, developing trustworthy AI systems that can mathematically verify their own reasoning through Lean 4 theorem proving. Built synthetic data pipelines for autoformalization of proof excerpts and created novel probabilistic proof state compression methods.",
    companyUrl: "https://www.rochester.edu",
  },
  {
    date: "Jan 2022 - Nov 2022",
    title: "Quantitative Research Intern",
    company: "Polaris",
    description:
      "Developed and implemented quantitative strategies with rigorous validation methods in Python for fund focused on the Indian real estate market. Built a multi-factor buy signal generation algorithm incorporating data cleaning pipelines, regression models, and Monte Carlo simulations.",
  },
  {
    date: "May 2021 - Nov 2021",
    title: "Research Assistant",
    company: "Dept of Imaging, University of Rochester Medical Center",
    description:
      "Trained SO(3) equivariant vision transformer for brain tumor segmentation on 100,000+ MRI images, placed 4th out of 300+ teams in Brain Tumor Segmentation Challenge 2021. Model used by URMC radiologists to detect urgent cases within 120s.",
    companyUrl: "https://www.urmc.rochester.edu",
  },
  {
    date: "Sep 2019 - Dec 2021",
    title: "Co-founder, Chief Technology Officer",
    company: "Prana.ai",
    description:
      "Made LiDAR systems for self-driving vehicles 4x cheaper and more effective with geometric deep learning + digital signal processing based super resolution. Generated 4x-8x denser point clouds without hallucination artifacts. Led an engineering team of 5 members. Funded by First Round Capital, Columbia University, UofR, NVIDIA Inception.",
    companyUrl: "https://prana.ai"
  },
];

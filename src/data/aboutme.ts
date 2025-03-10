export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Aliya (Ali) Rahim",
  title: "Mathematics BS (Honors)",
  institution: "University of Rochester",
  description:
    "I'm a Mathematics graduate with expertise in machine learning, formal verification, and probabilistic modeling. My work spans across developing LLMs for formal mathematics, implementing geometric deep learning solutions, and building robust AI systems. <br> <br> I'm passionate about applying rigorous mathematical principles to solve complex engineering challenges, and I'm seeking ML Engineer roles where I can leverage this unique combination of skills.",
  email: "aabdulra@u.rochester.edu",
  // Using a placeholder image - you may want to replace this with your actual photo
  imageUrl: "/ali_avatar.jpeg",
  githubUsername: "poissonali137",
  linkedinUsername: "aabdulra ",
  institutionUrl: "https://www.rochester.edu",
  altName: "(he/him)",
};

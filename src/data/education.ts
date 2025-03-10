export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "Graduated 2024",
    institution: "University of Rochester",
    degree: "Mathematics BS (Honors), GPA: 3.89/4.0",
  },
];

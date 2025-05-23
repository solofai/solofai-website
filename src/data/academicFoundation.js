// src/data/academicFoundation.js
export const academicFoundation = {
  title: "Academic Foundation",
  icon: "🎓",
  degrees: [
    {
      degree: "M.S. Computer Science",
      institution: "Syracuse University",
      year: "2019",
      focus: "Formal Theorem Proving & Mission Assurance",
      thesis: {
        title: "Analyzing And Assuring Missions and Systems by STORM: Introducing and analyzing Systems-Theoretic and Technical Operational Risk Management (STORM)",
        type: "Master's Thesis",
        link: "https://surface.syr.edu/thesis/317/"
      }
    },
    {
      degree: "M.S. Biomedical Forensic Science",
      institution: "Syracuse University", 
      year: "2017",
      focus: "Biomedical Forensic Science & Simulation"
    },
    {
      degree: "B.S. Physics & Applied Computational Mathematics",
      institution: "University of California, Irvine",
      year: "2006",
      focus: "Plasma Fusion Physics",
      publication: {
        authors: "Zhu, Y., Heidbrink, W.W., and Pickering, L.D.",
        year: "2010",
        title: "Phenomenology of energetic-ion loss from the DIII-D tokamak",
        journal: "Nuclear Fusion",
        volume: "50",
        formatted: 'Zhu, Y., Heidbrink, W.W., and Pickering, L.D. (2010). "Phenomenology of energetic-ion loss from the DIII-D tokamak." Nuclear Fusion 50.'
      }
    }
  ],
  description: "A unique interdisciplinary background combining physics, mathematics, forensic science, and computer science, providing a comprehensive foundation for innovative ML solutions.",
  
  // Additional details for potential expansion
  researchInterests: [
    "Formal Methods in Computer Science",
    "Systems Safety and Risk Management", 
    "Plasma Physics and Fusion Energy",
    "Biomedical Forensics Applications",
    "Machine Learning for Security"
  ],
  
  keyAchievements: [
    "Published research in premier physics journal Nuclear Fusion",
    "Developed STORM framework for mission assurance",
    "Interdisciplinary expertise spanning hard sciences to applied CS"
  ]
};
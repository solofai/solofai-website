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
        title: "Analyzing and Assuring Missions and Systems by STORM: Introducing and Analyzing Systems-Theoretic and Technical Operational Risk Management (STORM)",
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
        formatted: 'Y. B. Zhu, W. W. Heidbrink, and L. D. Pickering, "Phenomenology of Energetic-Ion Loss from the DIII-D Tokamak," <em>Nuclear Fusion</em>, vol. 50, no. 8, 084024, 2010. <a href="https://doi.org/10.1088/0029-5515/50/8/084024" target="_blank" rel="noopener noreferrer">doi:10.1088/0029-5515/50/8/084024</a>'
      }
    }
  ],
  description: "A unique interdisciplinary background combining physics, mathematics, forensic science, and computer science, providing a comprehensive foundation for innovative ML solutions.",
  
  // Additional details for potential expansion
  researchInterests: [
    "Machine Learning for Security",
    "Biomedical Forensics Applications",
    "Formal Methods in Computer Science",
    "Systems Safety and Risk Management", 
    "Plasma Physics and Fusion Energy",
  ],
  
  keyAchievements: [
    "Published research in premier physics journal Nuclear Fusion",
    "Completed Master's Thesis in mission and systems assurance",
    "Interdisciplinary expertise spanning hard sciences to applied CS"
  ]
};
//src/data/projects.js
export const projectsData = {
  title: 'Personal Projects',
  description: 'Things I do in my spare time for fun (other than playing drums).',
  icon: '🚀'
};

export const projects = [
  {
    title: 'Radiation Safety Training Course',
    description: 'Developing an interactive website for radiation safety certification based on the work of John J. Pickering',
    technologies: ['AI Agents', 'LLMs', 'React JS', 'Google Firebase', 'Analysis'],
    link: 'https://solofai.github.io/radiation_safety',
    status: 'Prototype phase.  Link is for the prototype web application.',
    icon: '☢️'
  },
  {
    title: 'Sol Companion',
    description: 'A vision for a game-based app that helps you achieve your goals by interacting in creative ways with AI.',
    technologies: ['AI Agents', 'LLMs', 'Game Design', 'Mobile Development'],
    // link: '/research',
    status: "Conceptual phase.",
    icon: '🎮'
  },
  {
    title: 'Keystroke Biometrics For Security',
    description: 'Research, publish, & develop tools for keystroke biometrics for security and fake profile detection.',
    technologies: [
        'Python',
        'PyTorch',
        'Scikit-learn',
        'Feature Engineering',
        'Statistical Analysis',
        'Machine Learning',
        'Deep Learning',
    ],
    link: '/research', //link to the biometrics research page
    status: 'Planning to publish soon.',
    icon: '🔐'
  },
  {
    title: 'Sol of AI Website',
    description: 'A personal website to showcase my work and research in AI and machine learning.',
    technologies: ['React JS', 'CSS', 'JavaScript', 'Responsive Design'],
    link: '/',
    status: 'Live and continuously updated.',
    icon: '🌐'
  },
];
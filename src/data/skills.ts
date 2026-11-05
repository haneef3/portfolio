import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    description: 'Core languages for algorithmic problem-solving and software systems.',
    iconName: 'Code2',
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    name: 'Machine Learning & Data Science',
    description: 'End-to-end data pipeline and statistical modeling ecosystem.',
    iconName: 'BrainCircuit',
    skills: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Data Preprocessing',
      'EDA',
      'Feature Engineering',
      'Model Training',
      'Model Evaluation',
    ],
  },
  {
    name: 'Backend Development',
    description: 'Scalable RESTful microservices, authentication, and API architecture.',
    iconName: 'Server',
    skills: ['Django REST Framework', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    name: 'Databases',
    description: 'Relational data modeling, NoSQL document stores, and embedded systems.',
    iconName: 'Database',
    skills: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    name: 'Frontend Development',
    description: 'Responsive user interfaces, state management, and component architecture.',
    iconName: 'Layout',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    name: 'Tools & Ecosystem',
    description: 'Version control, model serialization, and developer toolchain.',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'Joblib'],
  },
];

export const academicCoursework: string[] = [
  'Machine Learning',
  'Data Science',
  'Data Structures & Algorithms',
  'Object-Oriented Programming (OOP)',
  'Database Management Systems (DBMS)',
];


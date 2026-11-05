import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'civiceye-ai',
    title: 'CivicEye AI',
    category: 'AI-Powered Full-Stack Application',
    badge: 'Live Deployment',
    description:
      'AI-powered civic issue reporting platform featuring intelligent image analysis, automated severity classification, priority assessment, and dedicated dashboards for citizens, administrators, and municipal field workers.',
    detailedPoints: [
      'Engineered responsive role-based React dashboards providing end-to-end transparency for citizens, municipal admins, and field resolution workers.',
      'Integrated Google Gemini API to analyze uploaded civic issue images, automatically classify problems, assess severity, determine priority, and generate executive summaries.',
      'Constructed RESTful backend services with Node.js, Express, MongoDB, and Cloudinary for robust authentication, ticket management, and media uploads.',
    ],
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google Gemini API',
      'Cloudinary',
    ],
    liveUrl: 'https://civic-11zl.vercel.app/',
    githubUrl: 'https://github.com/haneef3',
    isFeatured: true,
    visualType: 'civic',
  },
  {
    id: 'doctor-appointment-management',
    title: 'Doctor Appointment Management System',
    category: 'Full-Stack Development',
    badge: 'Live Deployment',
    description:
      'Full-stack doctor appointment management system featuring streamlined appointment scheduling, patient record management, secure authentication, and granular role-based access control.',
    detailedPoints: [
      'Developed a full-stack web application featuring robust authentication, secure REST APIs, and comprehensive CRUD operations for clinic workflows.',
      'Built intuitive, high-performance interfaces facilitating real-time slot scheduling and multi-patient management.',
      'Implemented role-based access control enabling doctors to review schedules, track treatment history, and update appointment progress.',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    liveUrl: 'https://medicare-project-1xos.vercel.app/',
    githubUrl: 'https://github.com/haneef3',
    isFeatured: false,
    visualType: 'medical',
  },
  {
    id: 'heart-attack-predictor',
    title: 'Heart Attack Predictor',
    category: 'Machine Learning',
    badge: 'Live Deployment',
    description:
      'Machine learning-based prediction application engineered to calculate heart attack vulnerability from patient physiological indicators and cardiovascular metrics.',
    detailedPoints: [
      'Trained supervised ML classification models on structured cardiovascular datasets to output probability-based risk assessments.',
      'Executed rigorous data preprocessing, handling missing records, outlier detection, scaling, and feature correlation analysis.',
      'Built an accessible web application allowing patients and clinicians to input vital signs and receive immediate clinical risk estimates.',
    ],
    techStack: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Feature Engineering',
      'Model Evaluation',
    ],
    liveUrl: 'https://heart-attack-predictor-psi.vercel.app/',
    githubUrl: 'https://github.com/haneef3',
    isFeatured: false,
    visualType: 'heart',
  },
  {
    id: 'fake-voice-detection-system',
    title: 'Fake Voice Detection System',
    category: 'Artificial Intelligence / Machine Learning',
    badge: 'Research Project',
    description:
      'AI-powered voice deepfake detection system that accepts uploaded or recorded WAV audio and classifies speech samples as authentic human voice or potentially AI-generated synthetic audio.',
    detailedPoints: [
      'Implemented acoustic signal processing pipeline extracting MFCCs, chroma features, and spectral descriptors using Librosa and NumPy.',
      'Trained machine learning classification algorithms with Scikit-learn and serialized high-accuracy inference models via Joblib.',
      'Constructed a Django REST API service delivering classification predictions, confidence scores, and audio metric breakdowns to a React UI.',
      'Integrated JWT authentication with persistent SQLite storage for historical audit trails, predicted labels, and analytical summaries.',
    ],
    techStack: [
      'Python',
      'Librosa',
      'NumPy',
      'Scikit-learn',
      'Joblib',
      'Django REST Framework',
      'React.js',
      'SQLite',
    ],
    // No liveUrl per instructions
    githubUrl: 'https://github.com/haneef3',
    isFeatured: true,
    visualType: 'voice',
  },
];

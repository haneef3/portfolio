import { EducationItem, CertificationItem, AchievementItem } from '../types';

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech — CSE (Data Science)',
    institution: 'Presidency University',
    location: 'Bengaluru, Karnataka',
    period: '2023 – 2027',
    scoreLabel: 'CGPA',
    score: '8.23 / 10.0',
    details:
      'Specializing in Data Science and Machine Learning. Rigorous academic focus on predictive analytics, algorithmic optimization, deep learning foundations, and full-stack system design.',
    current: true,
  },
  {
    degree: 'Class XII (Senior Secondary)',
    institution: 'Narayana Junior College',
    location: 'Andhra Pradesh',
    period: '2021 – 2023',
    scoreLabel: 'Aggregate Score',
    score: '86.2%',
    details:
      'Mathematics, Physics, and Chemistry (MPC) stream with emphasis on quantitative reasoning and analytical problem solving.',
    current: false,
  },
  {
    degree: 'Class X (Secondary School Certificate)',
    institution: 'Narayana E.M. Medium School',
    location: 'Andhra Pradesh',
    period: '2021',
    scoreLabel: 'Board Score',
    score: '100% (10.0 GPA)',
    details:
      'Completed secondary education with perfect scholastic performance across science, mathematics, and languages.',
    current: false,
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    platform: 'freeCodeCamp',
    icon: 'Award',
  },
  {
    title: 'React (Basic)',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    icon: 'Award',
  },
  {
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    icon: 'Award',
  },
  {
    title: 'Node.js (Intermediate)',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    icon: 'Award',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'IEEE Tech Week 2025',
    event: 'IEEE Student Branch',
    year: '2025',
    type: 'Participation Certificate',
    description:
      'Participated in IEEE Tech Week 2025 technical hackathons, workshops, and competitive engineering challenges.',
  },
];


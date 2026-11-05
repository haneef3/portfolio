export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  roleBadge: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  location: string;
  phone: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  aboutBio: string[];
  keyHighlights: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  detailedPoints?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  isFeatured?: boolean;
  visualType: 'civic' | 'medical' | 'heart' | 'voice';
}

export interface SkillCategory {
  name: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  duration: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  score: string;
  details?: string;
  current?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  platform: 'freeCodeCamp' | 'HackerRank';
  icon: string;
}

export interface AchievementItem {
  title: string;
  event: string;
  year: string;
  type: string;
  description: string;
}


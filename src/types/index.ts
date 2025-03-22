export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
  icon: string;
  language: 'es' | 'en' | 'fr';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
  language: 'es' | 'en' | 'fr';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  language: 'es' | 'en' | 'fr';
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
  language: 'es' | 'en' | 'fr';
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
  language: 'es' | 'en' | 'fr';
}

export interface MessageWelcome {
  id: number;
  title: string;
  message: string;
  language: 'es' | 'en' | 'fr';
};
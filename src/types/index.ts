export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  yearsExperience: string;
  projectsCompleted: string;
  clientsSatisfied: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  icon: string;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: "Github" | "Linkedin" | "Twitter";
}

export interface SkillLogos {
  [key: string]: string;
}

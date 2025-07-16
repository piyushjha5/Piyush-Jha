import React from "react";
import { useState } from "react";
import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const personalInfo = {
  name: "Piyush",
  title: "Software Engineer",
  bio: "Full-stack web developer with a passion for building robust, scalable applications from the ground up. Proficient in React, Node.js, and modern web architecture, I bring a user-first mindset to every line of code—balancing elegant frontend design with rock-solid backend performance.",
  email: "jhapiyush5802@gmail.com",
  location: "Gurugram, India",
  yearsExperience: "5",
  projectsCompleted: "54",
  clientsSatisfied: "4",
};

const experience = [
  {
    position: "Trainee Software Developer",
    company: "Tech Superior Consulting",
    duration: "April 2025 – Present",
    description:
      "• Developed and optimized responsive user interfaces using React, TypeScript, and Tailwind CSS, ensuring seamless performance across devices. " +
      "• Integrated dynamic forms with Zod for type-safe, high-performance validation and improved user experience. " +
      "• Collaborated within an Agile Scrum team to ship scalable, reusable components, modals, and API-integrated features with rapid iteration cycles. " +
      "• Enhanced frontend-backend connectivity, streamlining data flow and significantly boosting app responsiveness and stability.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Zod",
      "REST APIs",
    ],
  },
];
const skills = [
  "Java",
  "DSA",
  "OOPs",
  "React",
  "Next.js",
  "TypeScript",
  "Javascript",
  "Node.js",
  "MongoDB",
  "Git",
  "Github",
  "Docker",
];

const projects = [
  {
    id: "1",
    title: "RentWise",
    description:
      "A sleek and fully responsive portfolio website built to showcase my skills, experience, and projects. Features dark mode, animations, and interactive sections.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "projects/rentWise.png",
    liveUrl: "https://your-portfolio-site.com",
    githubUrl: "https://github.com/your-username/portfolio-site",
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce",
    description:
      "A sleek and fully responsive portfolio website built to showcase my skills, experience, and projects. Features dark mode, animations, and interactive sections.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Mongo DB",
      "Node JS",
      "Express JS",
    ],
    image: "/projects/ecommerce.png",
    liveUrl: "https://eshopify-demo.com",
    githubUrl: "https://github.com/your-username/ecommerce-app",
    featured: true,
  },
  {
    id: "3",
    title: "Personal Porfolio",
    description:
      "A sleek and fully responsive portfolio website built to showcase my skills, experience, and projects. Features dark mode, animations, and interactive sections.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "/projects/personalPortfolio.png",
    liveUrl: "https://eshopify-demo.com",
    githubUrl: "https://github.com/your-username/ecommerce-app",
    featured: true,
  },
  {
    id: "4",
    title: "chatEase",
    description:
      "A sleek and fully responsive portfolio website built to showcase my skills, experience, and projects. Features dark mode, animations, and interactive sections.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "/projects/chatEase.png",
    liveUrl: "https://eshopify-demo.com",
    githubUrl: "https://github.com/your-username/ecommerce-app",
    featured: true,
  },
  // {
  //   id: "4",
  //   title: "TaskMaster Pro",
  //   description:
  //     "A productivity app for creating and managing tasks with drag-and-drop functionality, real-time collaboration, and user authentication.",
  //   technologies: ["Next.js", "Firebase", "Tailwind CSS", "DndKit"],
  //   image: "/images/taskmaster.png",
  //   liveUrl: "https://taskmaster-pro.app",
  //   githubUrl: "https://github.com/your-username/taskmaster-pro",
  //   featured: false,
  // },
];

function App() {
  return (
    <>
      <ThemeProvider>
        <Navigation></Navigation>
        <HeroSection personalInfo={personalInfo}></HeroSection>
        <AboutSection
          personalInfo={personalInfo}
          experience={experience}
        ></AboutSection>
        <SkillSection skills={skills}></SkillSection>
        <ProjectSection projects={projects}></ProjectSection>
        <ContactSection personalInfo={personalInfo}></ContactSection>
      </ThemeProvider>
    </>
  );
}

export default App;

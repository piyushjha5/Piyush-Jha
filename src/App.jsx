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

function App() {
  return (
    <>
      <ThemeProvider>
        <Navigation></Navigation>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SkillSection></SkillSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
      </ThemeProvider>
    </>
  );
}

export default App;

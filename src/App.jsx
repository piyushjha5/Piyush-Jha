import React from "react";
import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
// import StickySocialLinks from "./components/StickySocialLinks";

function App() {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillSection></SkillSection>
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
      {/* <StickySocialLinks /> */}
    </>
  );
}

export default App;

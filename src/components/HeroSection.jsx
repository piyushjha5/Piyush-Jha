import React from "react";
import {
  Mail,
  Download,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";

const HeroSection = ({ personalInfo }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo?.name || "John Doe"}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo?.title || "Full Stack Developer"}
            </p>

            {/* Bio */}
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              {personalInfo?.bio ||
                "Passionate about creating innovative solutions and beautiful user experiences."}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                Get In Touch
              </button>

              <a
                href="#"
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mb-8">
              <a
                href="https://github.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/hero.png"
                alt={personalInfo?.name || "Profile"}
                className="w-80 h-80 lg:w-132 lg:h-132 rounded-full border-4 border-white dark:border-gray-700 shadow-xl transform hover:scale-105 transition-all duration-300"
              />
              {/* Decorative background circle */}
              <div
                className="absolute w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl -z-10"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="text-center mt-12">
          <ChevronDown
            size={32}
            className="mx-auto text-gray-400 dark:text-gray-500 animate-bounce cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

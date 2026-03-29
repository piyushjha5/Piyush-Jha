import React, { useState } from "react";
import { Code, Zap, Palette } from "lucide-react";
import { skills, skillLogos } from "../data/portfolio";

function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="mb-3 relative">
                  {skillLogos[skill] && (
                    <img
                      src={skillLogos[skill]}
                      alt={`${skill} logo`}
                      className={`w-12 h-12 transition-all duration-300 ${
                        hoveredSkill === skill ? "scale-110 rotate-3" : ""
                      }`}
                      onError={handleImageError}
                    />
                  )}
                  {!skillLogos[skill] && (
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 text-center leading-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Highlights */}
        {/* <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            What I'm Currently Learning
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:scale-105 transition-transform duration-300 group border border-blue-200 dark:border-blue-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js logo"
                  className="w-8 h-8 filter brightness-0 invert"
                  onError={handleImageError}
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Next.js 14
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Exploring the latest features and App Router
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg hover:scale-105 transition-transform duration-300 group border border-purple-200 dark:border-purple-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
                  alt="Rust logo"
                  className="w-8 h-8 filter brightness-0 invert"
                  onError={handleImageError}
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                WebAssembly
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                High-performance web applications
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:scale-105 transition-transform duration-300 group border border-green-200 dark:border-green-800">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                  alt="Three.js logo"
                  className="w-8 h-8 filter brightness-0 invert"
                  onError={handleImageError}
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Three.js
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                3D graphics and interactive experiences
              </p>
            </div>
          </div>
        </div> */}

        {/* Additional Skills Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Always Learning & Growing</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current
            with the latest trends, best practices, and emerging technologies in
            the software development landscape.
          </p>
          <div className="flex justify-center space-x-6 text-blue-200">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              <span>Fast Learner</span>
            </div>
            <div className="flex items-center">
              <Code className="w-5 h-5 mr-2" />
              <span>Problem Solver</span>
            </div>
            <div className="flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              <span>Creative Thinker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

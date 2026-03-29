import React, { useState } from "react";
import { Code, Zap, Palette } from "lucide-react";
import { skills, skillLogos } from "../data/portfolio";

const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).style.display = "none";
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

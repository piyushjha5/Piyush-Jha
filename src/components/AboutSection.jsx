import React from "react";
import { Calendar } from "lucide-react";

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
    description: [
      "Developed and optimized responsive user interfaces using React, TypeScript, and Tailwind CSS, ensuring seamless performance across devices.",
      "Integrated dynamic forms with Zod for type-safe, high-performance validation and improved user experience.",
      "Collaborated within an Agile Scrum team to ship scalable, reusable components, modals, and API-integrated features with rapid iteration cycles.",
      "Enhanced frontend-backend connectivity, streamlining data flow and significantly boosting app responsiveness and stability.",
    ],
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
function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate software engineer who loves creating innovative
            solutions and building exceptional user experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              With over {personalInfo.yearsExperience} years of experience in
              software development, I've had the privilege of working with
              amazing teams and building products that impact thousands of
              users.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in full-stack development with a focus on creating
              scalable, maintainable, and user-friendly applications. I'm
              constantly learning and staying up-to-date with the latest
              technologies and best practices.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 text-center mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {personalInfo.yearsExperience}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {personalInfo.projectsCompleted}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {personalInfo.clientsSatisfied}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </div>
            </div> */}
          </div>

          {/* Image */}
          <div className="order-first md:order-last">
            <img
              src="/photo.jpg"
              alt="About me"
              className="rounded-lg h-96 w-full shadow-lg transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.position}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    {job.duration}
                  </div>
                </div>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

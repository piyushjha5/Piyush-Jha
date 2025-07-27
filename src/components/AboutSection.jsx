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
const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Dev Bhoomi Uttarakhand University",
    year: "2021 - 2025",
    description: "Specialized in software engineering, data structures.",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Don Bosco Convent School",
    year: "2018 - 2020",
    description: "Science stream with PCM.",
    icon: "📚",
  },
  // {
  //   degree: "Secondary Education",
  //   institution: "Your School Name",
  //   year: "2014 - 2016",
  //   description:
  //     "Completed secondary education with excellent academic performance.",
  //   icon: "🏫",
  // },
];

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
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a recent Computer Science graduate, I'm excited to begin my
              professional journey in software development. Through academic
              projects, internships, and personal coding challenges, I've
              developed strong skills in building modern web applications that
              prioritize user experience and clean code architecture.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              What drives me is the opportunity to learn, grow, and contribute
              to meaningful projects. I'm passionate about writing maintainable
              code, collaborating with experienced teams, and continuously
              expanding my technical skills to solve real-world problems.
            </p>
          </div>

          {/* Education Timeline */}
          {/* <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="ml-4 shrink-0">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          {/* Education Timeline - Minimal */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {/* Timeline dot */}
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          {/* <div className="order-first md:order-last">
            <img
              src="/photo.jpg"
              alt="About me"
              className="rounded-lg h-96 w-full shadow-lg transform hover:scale-105 transition-all duration-300"
            />
          </div> */}
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

import React, { useState } from "react";
import { Code, Zap, Palette } from "lucide-react";

const skills = [
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Data Structures",
  "OOPs",
  "PHP",
  "MySQL",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Vite",
  "VS Code",
];

function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skill logos mapping
  const skillLogos = {
    "Data Structures":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/algolia/algolia-original.svg",
    DSA: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/algolia/algolia-original.svg",
    Algorithms:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/algolia/algolia-original.svg",
    "Object-Oriented Programming":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
    OOPs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
    // Frontend
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Vue.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    Angular:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    HTML5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    // "Tailwind CSS":
    //   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Nuxt.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",

    // Backend
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Django:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    Flask:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Spring Boot":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    Laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    ".NET":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    Ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    Rails:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
    Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    Rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",

    // Database
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Redis:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    SQLite:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    Firebase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    Supabase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",

    // Tools
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Kubernetes:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    Azure:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    Netlify:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    Vercel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    Webpack:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Adobe XD":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
    "VS Code":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    Postman:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    Cypress:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
    Jenkins:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    Nginx:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    Apache:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    GraphQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "REST API":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    Linux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    Ubuntu:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",

    // Other
    "Machine Learning":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "AI/ML":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Data Science":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    DevOps:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    Blockchain:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    "Mobile Development":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    "React Native":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Flutter:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    Swift:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    Kotlin:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    Android:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    iOS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  };

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

import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";

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

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center animate-pulse">
                    <Star size={16} className="mr-1" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                  >
                    <ExternalLink
                      size={16}
                      className="mr-2 group-hover/link:translate-x-1 transition-transform duration-200"
                    />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200 group/link"
                  >
                    <Github
                      size={16}
                      className="mr-2 group-hover/link:rotate-12 transition-transform duration-200"
                    />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-lg group transition-all duration-300"
          >
            <Github
              size={20}
              className="mr-2 group-hover:rotate-12 transition-transform duration-300"
            />
            View All Projects on GitHub
            <ExternalLink
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

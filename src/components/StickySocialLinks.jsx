import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const StickySocialLinks = () => {
  return (
    <div className="fixed bottom-6 left-4 sm:left-6 lg:left-8 z-50 flex space-x-4 lg:pl-14">
      {/* <a
        href="https://github.com/piyushjha5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/piyushjha5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://x.com/piyushjha_5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Twitter"
      >
        <Twitter size={24} />
      </a> */}
      <a
        href="https://github.com"
        className="bg-white dark:bg-gray-700 p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com"
        className="bg-white dark:bg-gray-700 p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://twitter.com"
        className="bg-white dark:bg-gray-700 p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
      >
        <Twitter size={20} />
      </a>
    </div>
  );
};

export default StickySocialLinks;

import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
} from "lucide-react";

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

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_orfo4nd",
        "template_k9ocwv6",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
          reply_to: formData.email,
        },
        "SWa9SMJUmtB-QRT0V"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");

      // Auto-hide error message after 8 seconds
      setTimeout(() => setSubmitStatus(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Popup Messages */}
      {submitStatus && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full px-4">
          {submitStatus === "success" && (
            <div className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-xl shadow-2xl p-6 backdrop-blur-sm animate-slide-down">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Message Sent Successfully! 🎉
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Thanks for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>

                <button
                  onClick={() => setSubmitStatus(null)}
                  className="flex-shrink-0 w-6 h-6 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <svg
                    className="w-3 h-3 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Working Progress Bar */}
              <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full progress-success"></div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-white dark:bg-gray-800 border border-red-200 dark:border-red-700 rounded-xl shadow-2xl p-6 backdrop-blur-sm animate-slide-down">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Oops! Message Failed to Send 😞
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                    Something went wrong. Please try again or contact me
                    directly.
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center text-xs text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium transition-colors duration-200 hover:underline"
                  >
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {personalInfo.email}
                  </a>
                </div>

                <button
                  onClick={() => setSubmitStatus(null)}
                  className="flex-shrink-0 w-6 h-6 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <svg
                    className="w-3 h-3 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Working Progress Bar */}
              <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full progress-error"></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Rest of your contact section remains the same */}
      <section
        id="contact"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        {/* Contact section  */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and interesting
              projects. Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Response Time
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

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

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-lg hover:scale-105"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;

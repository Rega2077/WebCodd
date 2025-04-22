import React from "react";
import { motion } from "framer-motion";

const problems = [
  {
    title: "Debounce Search Input",
    description: "Implement a debounce function to delay API calls on input change.",
    difficulty: "Easy",
    tags: ["JavaScript", "Frontend"]
  },
  {
    title: "Toggle Dark Mode",
    description: "Build a toggle switch to enable dark and light mode in a website.",
    difficulty: "Easy",
    tags: ["React", "UI"]
  },
  {
    title: "Sticky Navbar",
    description: "Make a responsive sticky navbar that stays on top while scrolling.",
    difficulty: "Easy",
    tags: ["CSS", "Responsive"]
  }
];

const getDifficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "bg-green-100 text-green-700";
    case "medium":
      return "bg-yellow-100 text-yellow-700";
    case "hard":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const TryItOutSection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white w-full py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-purple-800">Try It Out!</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Try your hands on real-world Web Development challenges — frontend focused and fun to solve!
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-10 max-w-5xl mx-auto relative z-10">
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex flex-col justify-between h-full">
              {/* Problem Name and Tags */}
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {problem.title}
                </h3>
                <div className="flex gap-2">
                  {problem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-xl"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-3 mb-8 text-base leading-relaxed">
                {problem.description}
              </p>

              {/* Footer Section */}
              <div className="flex items-center justify-between mt-auto">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-gradient-to-l text-black hover:text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out">
                  Try it now!
                </button>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-xl ${getDifficultyColor(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TryItOutSection;

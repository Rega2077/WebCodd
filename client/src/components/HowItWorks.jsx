import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "🔍",
    title: "Discover the Topic",
    description: "Choose from a variety of curated computer science topics tailored to your goals.",
  },
  {
    number: "02",
    emoji: "🧠",
    title: "Practice Problems",
    description: "Sharpen your skills with structured problems and guided solutions.",
  },
  {
    number: "03",
    emoji: "📝",
    title: "Give Tests",
    description: "Test your knowledge in a timed environment to simulate real coding interviews.",
  },
  {
    number: "04",
    emoji: "🚀",
    title: "Enhance or Upgrade Yourself",
    description: "Analyze performance, identify weak spots, and level up your skills continuously.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-20 px-6 sm:px-10 lg:px-24 bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          How It Works
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Follow our four-step learning path to master coding interviews efficiently.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-3xl p-10 pt-14 text-center shadow-lg border border-purple-100 hover:shadow-purple-200 transition-shadow duration-300 ease-in-out"
          >
            {/* Number badge */}
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-tr from-purple-500 to-purple-400 text-white font-bold rounded-full flex items-center justify-center shadow-md text-sm">
              {step.number}
            </div>

            {/* Emoji + Title */}
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">
              <span className="text-3xl mr-2">{step.emoji}</span>
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mt-2">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

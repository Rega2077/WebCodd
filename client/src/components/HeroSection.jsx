import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const heroLines = [
  "Crack Any Coding Interview.",
  "Think Smart. Solve Fast.",
  "Become a Problem-Solving Pro.",
];

const HeroSection = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % heroLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-white to-purple-50">
      {/* Decorative Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-30 rounded-full filter blur-2xl animate-ping delay-2000" />
      <div className="absolute top-1/4 right-1/3 w-60 h-60 bg-purple-100 opacity-20 rounded-full filter blur-2xl animate-spin-slow" />

      <div className="w-full px-4 sm:px-6 lg:px-56 text-center">
        {/* Title Section */}
        <div className="min-h-[180px] md:min-h-[220px] flex items-center justify-center w-full mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            Sharpen Your Mind,{" "}
            <span className="text-purple-600 block mt-4 md:mt-6 relative h-20 md:h-24">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentLine}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-1/2 -translate-x-1/2 w-full"
                >
                  {heroLines[currentLine]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
          Dive deep into critical thinking, structured problem solving, and a mindset that wins — every single time.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 md:gap-6 justify-center">
          <Link
            to="/signup"
            className="px-8 py-3 md:px-10 md:py-4 bg-yellow-500 text-white rounded-full text-lg md:text-xl font-semibold shadow-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/problems"
            className="px-8 py-3 md:px-10 md:py-4 border-2 border-yellow-500 text-yellow-600 rounded-full text-lg md:text-xl font-semibold hover:bg-yellow-50 transition-all duration-300"
          >
            Explore Problems
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

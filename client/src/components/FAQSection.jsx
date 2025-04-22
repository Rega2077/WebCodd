import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is this website about?",
    answer:
      "This platform offers real-world web development challenges designed to help you sharpen your frontend skills with fun and practical tasks.",
  },
  {
    question: "Do I need any experience to try these problems?",
    answer:
      "Not at all! The problems are beginner-friendly and categorized by difficulty so you can start at your own pace.",
  },
  {
    question: "Are these challenges free to use?",
    answer:
      "Yes! All challenges listed are completely free and aimed at helping you build a strong portfolio and improve your frontend knowledge.",
  },
  {
    question: "Can I contribute my own challenges?",
    answer:
      "We're working on a contribution feature soon! You'll be able to submit your ideas and help others learn as well.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-24 px-6 sm:px-10 lg:px-28">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-purple-700 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">
          Got questions? We’ve got answers. Check out the most common inquiries below.
        </p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white border border-purple-100 rounded-3xl shadow-md hover:shadow-purple-200 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none"
            >
              <span className="text-xl font-semibold text-gray-800">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="w-6 h-6 text-purple-600 transition-transform duration-200" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-8 pt-1 pb-6 text-gray-600 text-lg leading-relaxed bg-purple-50/60 rounded-b-3xl">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

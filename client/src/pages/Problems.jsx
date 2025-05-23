// src/pages/Problems.jsx
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const sampleProblems = [
  {
    id: 1,
    name: "Create a Responsive Navbar",
    difficulty: "Easy",
    tags: ["HTML", "CSS"],
    estimatedTime: "30 min",
  },
  {
    id: 2,
    name: "Build a Dark Mode Toggle in React",
    difficulty: "Medium",
    tags: ["React", "CSS"],
    estimatedTime: "45 min",
  },
  {
    id: 3,
    name: "Implement a Custom Hook for Fetching Data",
    difficulty: "Hard",
    tags: ["React", "JavaScript"],
    estimatedTime: "1 hour",
  },
  {
    id: 4,
    name: "Responsive Grid Layout Using CSS Grid",
    difficulty: "Easy",
    tags: ["CSS"],
    estimatedTime: "25 min",
  },
  {
    id: 5,
    name: "Build a Form Validation in React",
    difficulty: "Medium",
    tags: ["React", "JavaScript", "HTML"],
    estimatedTime: "1 hour",
  },
  {
    id: 6,
    name: "Create a Todo App with Local Storage",
    difficulty: "Medium",
    tags: ["JavaScript", "HTML", "CSS"],
    estimatedTime: "1.5 hour",
  },
  {
    id: 7,
    name: "Build a Responsive Portfolio Page",
    difficulty: "Easy",
    tags: ["HTML", "CSS"],
    estimatedTime: "45 min",
  },
  {
    id: 8,
    name: "Integrate a REST API with Axios",
    difficulty: "Medium",
    tags: ["JavaScript", "React"],
    estimatedTime: "1 hour",
  },
  {
    id: 9,
    name: "Animate Components Using Framer Motion",
    difficulty: "Hard",
    tags: ["React", "Framer Motion"],
    estimatedTime: "2 hour",
  },
  {
    id: 10,
    name: "Create a Filterable Image Gallery",
    difficulty: "Medium",
    tags: ["HTML", "CSS", "JavaScript"],
    estimatedTime: "1 hour",
  },
];

const allTags = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Framer Motion",
  "Tailwind",
  "Next.js",
];

const Problems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [showAllTags, setShowAllTags] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProblems = sampleProblems
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) =>
      selectedTags.length === 0
        ? true
        : selectedTags.every((tag) => p.tags.includes(tag))
    )
    .filter((p) =>
      difficultyFilter === "" ? true : p.difficulty === difficultyFilter
    )
    .slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white px-6 sm:px-12 pt-28 pb-16 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Developer Practice Problems
        </h1>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          {/* Search */}
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-purple-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          />

          {/* Difficulty Buttons */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Easy', 'Medium', 'Hard'].map((level) => (
              <button
                key={level}
                onClick={() =>
                  setDifficultyFilter(level === 'All' ? "" : level)
                }
                className={`px-4 py-1 text-sm rounded-full font-medium border transition shadow-sm hover:scale-105 ${
                  difficultyFilter === (level === 'All' ? "" : level)
                    ? "bg-yellow-600 text-white border-yellow-600"
                    : "bg-white text-purple-600 border-purple-300"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {(showAllTags ? allTags : allTags.slice(0, 5)).map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-sm rounded-full border font-medium transition duration-200 shadow-sm hover:scale-105 ${
                selectedTags.includes(tag)
                  ? "bg-yellow-700 text-white border-yellow-700"
                  : "bg-yellow-100 text-yellow-700 border-yellow-300"
              }`}
            >
              {tag}
            </button>
          ))}
          {!showAllTags && (
            <button
              onClick={() => setShowAllTags(true)}
              className="flex items-center px-3 py-1 text-sm rounded-full bg-yellow-300 text-purple-800 hover:bg-yellow-400 transition border border-yellow-400"
            >
              <ChevronDown size={16} className="mr-1" />
              More Tags
            </button>
          )}
        </div>

        {/* Problems List */}
        <div className="grid gap-6">
          {filteredProblems.map((prob) => (
            <div
              key={prob.id}
              className="bg-white shadow-lg border border-purple-200 rounded-3xl p-6 transition transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-purple-400 font-semibold">
                  #{prob.id}
                </span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    prob.difficulty === "Easy"
                      ? "bg-green-100 text-green-700"
                      : prob.difficulty === "Medium"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {prob.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                {prob.name}
              </h3>
              <div className="text-sm text-gray-500 mb-3">⏰ Estimated Time: {prob.estimatedTime}</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {prob.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;
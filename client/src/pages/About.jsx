// pages/About.jsx
import React from "react";
import { Github, Linkedin, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 text-gray-800 px-6 sm:px-12 lg:px-28 pt-36 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Card Container */}
        <div className="grid gap-14 md:grid-cols-2">

          {/* Suyash Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition duration-300 border border-purple-100">
            <img
              src="https://via.placeholder.com/150"
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-purple-300"
            />
            <h2 className="text-2xl font-semibold text-purple-500 mb-1">Suyash Singh</h2>
            <p className="text-sm text-gray-500 mb-4">Frontend Developer & UI Designer</p>
            <p className="bg-purple-50 px-5 py-4 rounded-xl text-sm text-gray-600 text-center mb-5">
              Passionate about creating clean, elegant user interfaces with attention to detail and responsiveness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-purple-500"><Github size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-purple-500"><Linkedin size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-purple-500"><Globe size={22} /></a>
            </div>
          </div>

          {/* Shivam Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition duration-300 border border-purple-100">
            <img
              src="https://via.placeholder.com/150"
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-purple-300"
            />
            <h2 className="text-2xl font-semibold text-purple-500 mb-1">Shivam Goyal</h2>
            <p className="text-sm text-gray-500 mb-4">Backend Developer & System Architect</p>
            <p className="bg-purple-50 px-5 py-4 rounded-xl text-sm text-gray-600 text-center mb-5">
              Focused on building scalable backend systems, APIs, and efficient server-side architecture.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-purple-500"><Github size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-purple-500"><Linkedin size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-purple-500"><Globe size={22} /></a>
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="mt-24 bg-purple-100/40 p-10 rounded-3xl shadow-md text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">What We're Building</h3>
          <p className="text-gray-700 text-md leading-relaxed">
            We’re pre-final year students working on a full-stack application, aiming to make it easier for users to practice and refine their development skills. This journey is helping us master the MERN stack while building something meaningful together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

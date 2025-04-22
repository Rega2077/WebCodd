import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 sm:px-10 lg:px-28 pt-16 pb-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

        {/* Logo & Description */}
        <div className="text-center lg:text-left">
          <h3 className="text-3xl font-bold text-purple-400">WebCodd</h3>
          <p className="mt-4 text-sm max-w-xs text-gray-400">
            Empowering developers through real-world, hands-on frontend challenges and elegant design thinking.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="text-md font-semibold text-purple-300 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center lg:items-end">
          <h4 className="text-md font-semibold text-purple-300 mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-purple-400 transition">
              <Twitter size={22} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-purple-400 transition">
              <Github size={22} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-purple-400 transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WebCodd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

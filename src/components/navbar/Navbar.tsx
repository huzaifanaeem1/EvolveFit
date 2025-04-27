"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/images/huzaifa resume.pdf" }, // Add the link to your resume
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/huzaifanaeem1" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/huzaifa-naeem-b9a94428b/" },
    { icon: <MdEmail />, href: "mailto:huzaifaneem1407@gmail.com" }, // mailto will open email client
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-black/90 bg-white/90 backdrop-blur-sm shadow-sm"
          : "dark:bg-black bg-white"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/ill/profile.png"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <Link
              href="#home"
              className="text-2xl font-bold dark:text-white text-black"
            >
              Huzaifa Naeem
            </Link>
          </div>

          {/* Middle - Navigation Links (Desktop only) */}
          <nav className="hidden md:flex items-center space-x-8 mx-6 flex-grow justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-black transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Social Links and Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((social, idx) => (
  <a
    key={idx}
    href={social.href}  // This href includes the mailto: link for the email
    target="_blank"
    rel="noopener noreferrer"
    className="dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-black transition-colors text-xl"
  >
    {social.icon}
  </a>
))}

            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              className="dark:text-white text-black focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-black transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 py-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-black transition-colors text-xl"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

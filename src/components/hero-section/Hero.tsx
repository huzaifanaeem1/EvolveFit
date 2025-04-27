"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes"; // <-- Step 1: Import useTheme

export default function Hero() {
  const { theme } = useTheme(); // <-- Step 2: Get current theme

  // Step 3: Conditional Image Source
  const imageSrc = theme === "dark" ? "/images/ill/hi-white.png" : "/images/ill/hi-black.png";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-black mb-6">
              Hi, I'm <span className="text-blue-500">Huzaifa Naeem</span>
            </h1>
            <h2 className="text-2xl md:text-3xl dark:text-gray-300 text-gray-700 mb-8">
              Graphic Designer & Web Developer
            </h2>
            <p className="dark:text-gray-400 text-gray-600 mb-8 text-lg">
              Transforming creative ideas into responsive, high-performance websites and designs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="dark:bg-white/10 dark:hover:bg-white/20 bg-black/5 hover:bg-black/10 dark:text-white text-black px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Work
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <Image
                src={imageSrc} // <-- Step 4: Set the image dynamically
                alt="Hero Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

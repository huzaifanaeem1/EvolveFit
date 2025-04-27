"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes"; // Step 1: Import useTheme

export default function About() {
  const { theme } = useTheme(); // Step 2: Get current theme

  // Step 3: Conditional Image Source
  const imageSrc = theme === "dark" ? "/images/ill/HOME-WHITE.png" : "/images/ill/HOME-BLACK.png";

  return (
    <section
      id="about"
      className="py-20 dark:bg-gray-900/50 bg-gray-100/50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <div className="relative w-full h-90 md:h-96 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <Image
                src={imageSrc} // Step 4: Use conditional image
                alt="About Illustration"
                width={450}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black mb-6">
              About Me
            </h2>
            <p className="dark:text-gray-300 text-gray-700 mb-4 text-lg">
              I'm Huzaifa Naeem, a 17-year-old frontend developer and freelance graphic designer based in Karachi, Pakistan. Currently, I'm pursuing my intermediate (Pre-Engineering) studies while working on freelance projects.
            </p>

            <p className="dark:text-gray-300 text-gray-700 mb-4 text-lg">
              <strong>2024 – Present:</strong> Enrolled in the Governor House Sindh IT Initiative (GIAIC), where I'm learning web development and Python programming with a focus on building AI agents and smart solutions for the future.
            </p>

            <p className="dark:text-gray-300 text-gray-700 mb-4 text-lg">
              <strong>2021 – Present:</strong> Freelancing as a graphic designer with 3+ years of experience in logo design, brand identity, and vector tracing. I’ve worked with a variety of clients to bring their creative visions to life.
            </p>

            <p className="dark:text-gray-300 text-gray-700 mb-6 text-lg">
              With expertise in React, Next.js, and Tailwind CSS, I build responsive, user-friendly websites. I'm passionate about technology, continuously expanding my skills in both frontend development and artificial intelligence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

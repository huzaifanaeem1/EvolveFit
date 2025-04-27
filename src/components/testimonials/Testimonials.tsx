"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaStar } from "react-icons/fa"; // Importing star icon from react-icons

const testimonials = [
  {
    review:
      "Huzaifa's web development skills are unparalleled! He crafted a user-friendly interface and delivered top-notch solutions for our project. Highly recommend!",
    name: "John Doe",
    rating: 5,
  },
  {
    review:
      "Huzaifa helped us redesign our website, and the results were fantastic! His attention to detail and commitment to meeting deadlines set him apart. Will definitely work with him again!",
    name: "Emily Johnson",
    rating: 5,
  },
  {
    review:
      "Working with Huzaifa has been an amazing experience. His ability to solve complex problems and provide efficient, scalable solutions made him an invaluable part of our team.",
    name: "Michael Smith",
    rating: 4,
  },
  {
    review:
      "Huzaifa's technical expertise and creative approach helped us achieve our business goals. The website he built increased our conversion rate by 40%.",
    name: "Sarah Williams",
    rating: 5,
  },
  {
    review:
      "Exceptional developer with a keen eye for design. Huzaifa delivered our project ahead of schedule with zero bugs. Truly impressive work!",
    name: "David Brown",
    rating: 5,
  },
];

export default function Testimonials() {
  const { theme } = useTheme();

  return (
    <section
      id="testimonials"
      className={`py-20 ${theme === "dark" ? "bg-black" : "bg-gray-50"} overflow-hidden transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4 transition-colors duration-300`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What My Clients Say
        </motion.h2>

        <motion.div
          className={`w-20 h-1 ${theme === "dark" ? "bg-blue-400" : "bg-blue-500"} mx-auto mb-12 transition-colors duration-300`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-12 max-w-2xl mx-auto transition-colors duration-300`}>
        Discover why clients love working with me. Their experiences speak volumes about the quality of work and dedication I bring to every project.
        </p>

        <div className="flex overflow-x-auto pb-8 gap-8 px-4 scrollbar-hide">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className={`flex-shrink-0 ${theme === "dark" ? "bg-gray-800" : "bg-white"} p-8 rounded-lg shadow-lg w-96 transition-colors duration-300`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-4 italic transition-colors duration-300`}>
                {`"${testimonial.review}"`}
              </p>
              <div className={`border-t ${theme === "dark" ? "border-gray-700" : "border-gray-200"} pt-4 transition-colors duration-300`}>
                <p className={`text-md font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"} transition-colors duration-300`}>
                  {testimonial.name}
                </p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <FaStar key={idx} className={`text-yellow-400`} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

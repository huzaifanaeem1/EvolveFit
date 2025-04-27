"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 88 },
  { name: "Next.js", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Responsive Design", level: 96 },
  { name: "Node.js", level: 75 },
  { name: "GitHub", level: 80 },
  { name: "Figma", level: 65 },
  { name: "Graphic Design", level: 100 },
  { name: "Canva", level: 100 },
  { name: "Adobe Illustrator", level: 100 },
  { name: "Adobe PhotoShop", level: 100 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            My Skills
          </h2>
          <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto text-lg">
          Crafting clean, responsive, and user-friendly designs using modern tools and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium dark:text-white text-black">
                  {skill.name}
                </span>
                <span className="dark:text-gray-400 text-gray-600">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="bg-blue-500 h-2.5 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
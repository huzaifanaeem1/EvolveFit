"use client";
import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useTheme } from "next-themes";

export default function Contact() {
  const { theme } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setMessage(""); // Reset the message

  try {
    if (!formRef.current) {
      throw new Error("Form reference not found");
    }

    const formData = new FormData(formRef.current);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setMessage("Message sent successfully!");
      formRef.current.reset(); // Reset form after success
    } else {
      throw new Error("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    setMessage("Failed to send message. Please try again.");
  } finally {
    setIsLoading(false);
    setTimeout(() => setMessage(""), 4000);
  }
};


  return (
    <section id="contact" className="py-20 dark:bg-gray-900/50 bg-gray-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              src={
                theme === "dark"
                  ? "/images/ill/white-call-01.png"
                  : "/images/contact.png"
              }
              alt="Contact Illustration"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black mb-6">
              Get In Touch
            </h2>
            <p className="dark:text-gray-300 text-gray-700 mb-8 text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 dark:text-white text-black font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="entry.421401405"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 border-gray-300 dark:bg-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 dark:text-white text-black font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="entry.1170737057"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 border-gray-300 dark:bg-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 dark:text-white text-black font-medium"
                >
                  Message
                </label>
                <textarea
                  name="entry.1019578460"
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 border-gray-300 dark:bg-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center gap-2 ${
                  isLoading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
                } text-white px-6 py-3 rounded-lg font-medium transition-colors w-full`}
              >
                {isLoading ? "Sending..." : "Send Message"} <FiSend />
              </button>
            </form>

            {message && (
              <p
                className={`text-center mt-4 font-semibold ${
                  message.includes("success")
                    ? "text-green-500 dark:text-green-400"
                    : "text-red-500 dark:text-red-400"
                }`}
              >
                {message}
              </p>
            )}

            <div className="mt-8">
              <h3 className="text-xl font-semibold dark:text-white text-black mb-4">
                Or connect with me on:
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/huzaifanaeem1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 dark:bg-gray-800 bg-gray-100 rounded-full dark:text-white text-black hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/huzaifa-naeem-b9a94428b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 dark:bg-gray-800 bg-gray-100 rounded-full dark:text-white text-black hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://wa.me/923123629391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 dark:bg-gray-800 bg-gray-100 rounded-full dark:text-white text-black hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

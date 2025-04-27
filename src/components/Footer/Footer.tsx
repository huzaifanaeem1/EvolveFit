import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import {  FaGithub, FaLinkedin, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t dark:border-gray-800 border-gray-200 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Logo and Text */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link href="/" className="text-2xl font-bold text-black dark:text-white">
            Huzaifa<span className="text-primary"> Naeem</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/huzaifanaeem1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/huzaifa-naeem-b9a94428b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/share/91NKfwYSFLSKCXBX/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://x.com/Huzai_fa123?t=DnFYfJoMreRFqN08hnQP6A&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white transition"
          >
            <FaSquareXTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white transition"
          >
            <FaInstagramSquare size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

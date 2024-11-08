import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="text-white bg-black body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            href={"/"}
          >
            <span className="ml-3 text-xl font-bold">
            Evolve
              <span className="text-primary"> Fit</span>
            </span>
          </Link>
          <p className="text-md text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-primary sm:py-2 sm:mt-0 mt-4">
            © 2024 Evolve <span className="text-primary">Fit</span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.facebook.com/share/91NKfwYSFLSKCXBX/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer">
              <FaFacebook className="w-8 h-8 hover:text-secondary hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://x.com/Huzai_fa123?t=DnFYfJoMreRFqN08hnQP6A&s=09"
            target="_blank"
            rel="noopener noreferrer">
              <FaSquareXTwitter className="w-8 h-8 hover:text-secondary hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5"
            target="_blank"
            rel="noopener noreferrer">
              <FaInstagramSquare className="w-8 h-8 hover:text-secondary  hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 hover:text-secondary  hover:scale-110 transform transition duration-400" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

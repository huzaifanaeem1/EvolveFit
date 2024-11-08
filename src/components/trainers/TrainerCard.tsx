import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

type Trainer = {
  id: number;
  name: string;
  desc: string;
  profile: string;
  fbLink: string;
  xLink: string;
  instaLink: string;
};
const TrainerCard = ({ trainer }: { trainer: Trainer }) => {
  const { name, desc, profile } = trainer;
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image
          alt="trainer"
          className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4  ring-2 ring-primary shadow-lg shadow-secondary/60"
          src={profile}
          width={200}
          height={200}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg">{name}</h2>
          <p className="mb-4">{desc}</p>
          <span className="inline-flex">
            <a>
              <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-2">
              <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-2">
              <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;

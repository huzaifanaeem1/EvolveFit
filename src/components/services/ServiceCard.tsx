import React from "react";
import Image from "next/image";

const ServiceCard = ({
  name,
  image,
  imageAlt,
}: {
  name: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <div className="bg-black rounded-lg p-4 w-[300px] md:w-[30%] mb-6 ring-2 ring-primary shadow-lg shadow-secondary/60 hover:scale-105 transform transition duration-300">
      <div className="rounded-lg h-52 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={500}
          height={500}
          className="rounded-lg w-full object-cover h-48"
        />
      </div>
      <h2 className="text-xl font-bold title-font text-white mt-2">{name}</h2>
    </div>
  );
};

export default ServiceCard;

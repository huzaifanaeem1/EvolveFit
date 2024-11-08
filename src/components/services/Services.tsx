import React from "react";
import ServiceCard from "./ServiceCard";
import { SectionTitle } from "..";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Physical Fitness",
      imageUrl:
        "/images/img1.jpg",
    },

    {
      id: 2,
      name: "Weight Gain",
      imageUrl:
        "/images/img2.jpg",
    },
    {
      id: 3,
      name: "Strength Training",
      imageUrl:
        "/images/img3.jpg",
    },
    {
      id: 4,
      name: "Fat Lose",
      imageUrl:
        "/images/img4.jpg",
    },
    {
      id: 5,
      name: "Weight Lifting",
      imageUrl:
        "/images/img5.jpg",
    },
    {
      id: 6,
      name: "Running",
      imageUrl:
        "/images/img6.jpg",
    },
  ];

  return (
    <section className=" bg-stone-950 text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle first="Our" second="Services" />

        <div className="flex flex-wrap mb-10 mt-28 gap-6 justify-center">
          {services.map((service) => (
            <ServiceCard
              name={service.name}
              image={service.imageUrl}
              imageAlt={service.name}
              key={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

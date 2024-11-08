import React from "react";
import { Button } from "../";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-white body-font pt-6"
      style={{ backgroundImage: "url('/images/boy.jpg')" }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow sm:w-1/2 mt-20 lg:mt-28 md:pl-16 flex flex-col sm:items-start sm:text-left mb-16 sm:mb-0 items-center text-center">
          <h1 className="title-font text-6xl sm:text-7xl font-bold ">
          Elevate Your<br className="hidden lg:inline-block" />
          <span className="text-secondary"> Fitness </span>
          </h1>
          <p className="  font-medium mt-4 leading-relaxed">
          Achieve strength and endurance with EvolveFit. Our expert-led programs 
          <br />
          and supportive community will help you reach your fitness goals. 
          <br />
          Join us today!
          </p>
          <a className="ml-4"
            href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer">
          <Button type={"button"} className="mt-4 bg-primary hover:bg-secondary">
            Join us
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

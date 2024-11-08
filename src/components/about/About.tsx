import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto flex gap-12 md:gap-0 px-16 py-24 md:flex-row flex-col items-center justify-center ">
      <div>
        <Image
          className="object-cover object-center rounded ring-2 ring-primary shadow-lg shadow-secondary/60"
          alt="hero"
          src="/images/about.jpg"
          width={520}
          height={460}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-6xl text-4xl font-black  text-white">
          Why
          <span className="text-secondary"> Choose Us?</span>
        </h1>
        <p className="mt-10 leading-relaxed">
        Personalized Training: Tailored fitness plans to meet your unique goals and needs.
          <br />
          <br />
          Expert Trainers: Our certified trainers provide guidance and motivation every step of the way.
          <br />
          <br />
          Motivating Community: Join a supportive and encouraging environment that pushes you to succeed.
          <br />
          <br />
          Flexible Timings: Convenient hours to fit your busy lifestyle and fitness goals.
        </p>

        <button className="inline-flex text-lg font-medium text-white mt-10 border-0 px-6 focus:outline-none py-2 bg-black border-none shadow-primary ring-2 ring-primary shadow-md rounded-lg hover:scale-105 transform transition duration-300">
          Get Started with a Free Lesson!
        </button>
      </div>
    </div>
  );
};

export default About;

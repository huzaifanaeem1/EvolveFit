import React from "react";
import { About as AboutComp, SectionTitle } from "@/components";
const About = () => {
  return (
    <section className="text-white bg-black body-font w-full mt-32">
      <SectionTitle first="About" second="Us" />
      <p className="lg:w-2/3 mx-auto leading-relaxed mt-2 text-base text-white pb-8 pt-8 px-4 py-4">
      At EvolveFit, fitness is a lifestyle. Our expert trainers, personalized programs,
      and state-of-the-art facilities are here to support you every step of the way.
      We’re committed to helping you achieve a stronger, healthier version of yourself
      through dedication and community.
          </p>
      <AboutComp />
    </section>
  );
};
export default About;

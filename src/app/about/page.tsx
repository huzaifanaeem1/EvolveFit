import React from "react";
import { About as AboutComp, SectionTitle } from "@/components";
const About = () => {
  return (
    <section className="text-white bg-black body-font w-full mt-32">
      <SectionTitle first="About" second="Us" />
      <p className="lg:w-2/3 mx-auto leading-relaxed mt-2 text-base text-white pb-8 pt-8">
      At EvolveFit, we believe fitness is more than a goal—it’s a lifestyle. Our expert trainers, 
      personalized programs, and state-of-the-art facilities are here to support every step of your 
      fitness journey. We’re dedicated to helping you achieve a stronger, healthier version of yourself 
      through commitment, community, and continuous improvement.
          </p>
      <AboutComp />
    </section>
  );
};
export default About;

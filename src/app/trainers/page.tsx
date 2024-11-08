import React from "react";
import { SectionTitle, Trainers } from "@/components";
const page = () => {
  return (
    <div>
      <section className="bg-black body-font mt-20 text-white">
        <div className="flex justify-center items-center mx-4 flex-col pt-20">
          <div className=" text-center w-full">
            <SectionTitle first="Our" second="Trainers" />
            <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base pt-8">
            Our certified trainers are dedicated to guiding you every step of the way.
            With personalized fitness plans and expert advice, we ensure you reach your goals 
            efficiently and safely.
            </p>
          </div>
          <div className="mx-4">
            <Trainers />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

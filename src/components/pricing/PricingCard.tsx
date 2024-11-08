import React from "react";
import { FaCheck } from "react-icons/fa";

type Plan = {
  id: number;
  title: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
};

const PricingCard = ({
  billingCycle,
  plan,
}: {
  billingCycle: string;
  plan: Plan;
}) => {
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div className="h-full p-6 rounded-lg border-2 border-primary flex flex-col relative overflow-hidden ring-2 ring-primary shadow-lg shadow-secondary/60 hover:scale-105 transform transition duration-300">
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          {plan.title}
        </h2>
        <h1 className="text-5xl text-primary leading-none pb-4 mb-4 border-b border-white">
          {billingCycle === "Monthly" ? plan.monthlyPrice : plan.annualPrice}
          <span className="text-lg ml-1 font-normal text-white">
            {billingCycle === "Monthly" ? "/mo" : "/yr"}
          </span>
        </h1>
        {plan.features.map((feature) => (
          <p key={feature} className="flex items-center text-white mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
              <FaCheck className="w-3 h-3" />
            </span>
            {feature}
          </p>
        ))}
        <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-secondary rounded">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;

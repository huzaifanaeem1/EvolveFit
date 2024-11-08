"use client";
import { SectionTitle } from "@/components";
import React, { useState } from "react";
import PricingCard from "./PricingCard";

const plans = [
  {
    id: 1,
    title: "STANDARD",
    monthlyPrice: "$40",
    annualPrice: "$400",
    features: [
      "Access to all gym equipment",
      "Group fitness classes",
      "Personal locker",
    ],
  },
  {
    id: 2,
    title: "STANDARD",
    monthlyPrice: "$60",
    annualPrice: "$600",
    features: [
      "Access to all gym equipment",
      "Group fitness classes",
      "Personal locker",
    ],
  },
  {
    id: 3,
    title: "PREMIUM",
    monthlyPrice: "$80",
    annualPrice: "$800",
    features: [
      "24/7 gym access",
      "Personal trainer sessions",
      "Free guest passes",
    ],
  },
  {
    id: 4,
    title: "ELITE",
    monthlyPrice: "$100",
    annualPrice: "$1000",
    features: [
      "All premium benefits",
      "Customized diet plan",
      "Monthly health check-ups",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <section className="bg-stone-950 text-white body-font overflow-hidden">
      <div className="container px-5 sm:pt-32 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <SectionTitle first="Pricing" second="Plans" />
          <p className="lg:w-2/3 mx-auto leading-relaxed mt-2 text-base text-white pb-8 pt-8">
          Whether you’re looking for flexibility or the best value, we have options for you. Choose between monthly or annual plans and take the first step towards achieving your fitness goals.
          </p>
          <div className="flex mx-auto border-2 border-secondary ring-primary shadow-lg shadow-secondary/60 rounded overflow-hidden mt-6">
            {["Monthly", "Annually"].map((cycle) => (
              <button
                key={cycle}
                className={`py-1 px-4 ${
                  billingCycle === cycle ? "bg-secondary text-white" : ""
                }`}
                onClick={() => setBillingCycle(cycle)}
              >
                {cycle}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

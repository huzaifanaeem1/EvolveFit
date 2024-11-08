import React from "react";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  const trainersInfo = [
    {
      id: 1,
      name: "RAMEEZ",
      desc:
        "Cardio Trainer Specializing in stamina and cardiovascular health, Hamza helps clients boost endurance and burn fat with high-intensity workouts.",
      profile: "/images/Man.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 2,
      name: "KASHAN",
      desc:
        "Strength & Conditioning Coach Ayesha focuses on building strength and muscle through personalized training programs tailored to each client’s needs.",
      profile: "/images/Man1.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 3,
      name: "HUZAIFA",
      desc:
        " Yoga & Flexibility Instructor Omar enhances flexibility and balance, guiding clients through yoga and mindful stretching for improved mobility and relaxation.",
 profile: "/images/Man2.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
    {
      id: 4,
      name: "TAHA",
      desc:
        "Nutrition & Wellness Expert Sara offers customized nutrition plans to complement your fitness goals, helping you achieve peak performance and maintain a healthy lifestyle.",
      profile: "/images/Man3.jpg",
      fbLink: "www.facebook.com",
      xLink: "www.x.com",
      instaLink: "www.instagram.com",
    },
  ];

  return (
    <div className="container flex justify-center items-center flex-wrap mt-24 mb-12">
      {trainersInfo.map((trainer) => (
        <TrainerCard key={trainer.id} trainer={trainer} />
      ))}
    </div>
  );
};

export default Trainers;

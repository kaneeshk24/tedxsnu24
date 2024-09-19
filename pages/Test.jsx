import React, { useEffect, useState } from "react";
import SpeakerCard from "../components/SpeakerCard/SpeakerCard";
import umgumg from "../public/Images/conf24/humaira1.jpg";
import "./Test.css";

export default function Test() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleScroll = () => {
    const cards = document.querySelectorAll(".card");
    let closestIndex = null;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveCardIndex(closestIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {[...Array(5)].map((_, index) => (
        <SpeakerCard
          key={index}
          image={umgumg}
          description="This is a brief description of the speaker."
          isActive={index === activeCardIndex}
        />
      ))}
    </div>
  );
}

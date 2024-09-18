import React, { useEffect, useRef } from "react";
import VanillaTilt from 'vanilla-tilt';
import styles from "./ThroughTheLookingGlass.module.css";

const SpeakerCard = ({ position }) => {
  const cardRef = useRef(null); // Use ref for tilt

  let cardStyle = styles.speakerCard;
  let captionText = "";

  switch (position) {
    case "topLeft":
      cardStyle += ` ${styles.speakerCardTopLeft}`;
      captionText = "Humaira Mushtaq: Professional racing driver ";
      break;
    case "topRight":
      cardStyle += ` ${styles.speakerCardTopRight}`;
      captionText = "Sudhana Shanker: A versatile Bharatnatyam performer";
      break;
    case "bottomLeft":
      cardStyle += ` ${styles.speakerCardBottomLeft}`;
      captionText = "Sampath G. : Author & editor at The Hindu";
      break;
    case "bottomRight":
      cardStyle += ` ${styles.speakerCardBottomRight}`;
      captionText = "More To Be Revealed";
      break;
    default:
      break;
  }

  // Use effect to apply VanillaTilt to the card
  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25, // Max tilt angle
        speed: 400, // Speed of the transition
        glare: true, // Enables glare effect
        "max-glare": 0.3, // Max opacity for glare
      });
    }
  }, []);

  return (
    <div className={cardStyle} ref={cardRef}>
      <div className={styles.caption}>{captionText}</div>
    </div>
  );
};

export default SpeakerCard;

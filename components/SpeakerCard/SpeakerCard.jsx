import React, { useEffect, useRef, useState } from "react";
import styles from "./SpeakerCard.module.css";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

const SpeakerCard = ({ name, image, description }) => {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Initialize Vanilla Tilt for desktop view (above 768px)
    if (window.innerWidth > 768 && cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.cardd} ${isInView ? styles.inView : ""}`}
    >
      <div className={styles.imageWrapperd}>
        <img src={image} alt="Speaker" className={styles.imaged} />
      </div>
      {/* <div className={styles.descriptiond}>
        <p className={styles.named}>{name}</p>
        <p className={styles.descriptionTextd}>{description}</p>
      </div> */}
    </div>
  );
};

export default SpeakerCard;

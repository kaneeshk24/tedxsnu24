import React, { useEffect, useRef, useState } from "react";
import styles from "./SpeakerCardMobile.module.css";

const SpeakerCardMobile = ({ name, image, description }) => {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Create the IntersectionObserver to observe the card
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          // Capture scroll direction to control smooth fade-out
          setScrollPosition(window.scrollY);
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is in view
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isInView ? styles.inView : ""} `}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt="Speaker" className={styles.image} />
      </div>
      {/* <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <p className={styles.descriptionText}>{description}</p>
      </div> */}
    </div>
  );
};

export default SpeakerCardMobile;

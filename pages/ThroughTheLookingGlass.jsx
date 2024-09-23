import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ThroughTheLookingGlass.module.css";
import SpeakerCard from "../components/SpeakerCard/SpeakerCard";
import SpeakerCardMobile from "../components/SpeakerCardMobile/SpeakerCardMobile";

import speakerData from "../public/Data/Speakers.json";

const ThroughTheLookingGlass = () => {
  const rotationRef = useRef(0);
  const imageRef = useRef(null);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newRotation = scrollPosition * 0.2; // Adjust rotation factor for smoothness

      // Use requestAnimationFrame for smooth transitions
      requestAnimationFrame(() => {
        rotationRef.current = newRotation;
        if (imageRef.current) {
          imageRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        }
      });
      if (descriptionRef.current) {
        const rect = descriptionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight && rect.bottom > 0) {
          setIsDescriptionVisible(true);
        } else {
          setIsDescriptionVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.container}>
      <h1>
        <span className={styles.title}>Through</span>
        <hr className={styles.divider} />
        <span className={styles.titleEnd}>The</span>
        <hr className={styles.divider} />
        <span className={styles.titleThrough}>Looking</span>
        <hr className={styles.divider} />
        <span className={styles.titleEndGlass}>
          <span className={styles.titleEndGlassBlur}>Glass</span>
        </span>
        <hr className={styles.divider} />
      </h1>
      <section className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          {/* Apply the rotation to the image */}
          <div className={styles.image} ref={imageRef} />
        </div>
        <p
          className={`${styles.description} ${
            isDescriptionVisible ? styles.descriptionVisible : ""
          }`}
          ref={descriptionRef}
        >
          Beneath the violet twilight, an iridescent fog drifted through the
          ancient forest, where whispers of forgotten legends intertwined with
          the rustling of leaves.
          <br />
          Here, time seemed to slow, and the boundaries between reality and
          dream blurred. A single, delicate flower bloomed in the center, its
          petals shimmering like stardust.
        </p>
      </section>
      <hr className={styles.divider} />
      <section className={styles.speakerGrid}>
        {speakerData.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            description={speaker.description}
            image={speaker.image}
          />
        ))}
        {speakerData.map((speaker, index) => (
          <SpeakerCardMobile
            key={index}
            name={speaker.name}
            description={speaker.description}
            image={speaker.image}
          />
        ))}
      </section>
      <section className={styles.ticketsSection}>
        <div className={styles.ticketsContent}>
          <div className={styles.ticketsTitle}>
            <h2 className={styles.grabYour}>Tickets Resuming</h2>
          </div>
          <p className={styles.ticketsSubtitle}></p>
        </div>
        <Link href="/ThroughTheLookingGlass">
          <button className={styles.ticketButton}>Soon</button>
        </Link>
      </section>
    </main>
  );
};

export default ThroughTheLookingGlass;

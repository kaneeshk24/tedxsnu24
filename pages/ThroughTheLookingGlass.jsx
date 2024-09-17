import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./ThroughTheLookingGlass.module.css";
import SpeakerCard from "./SpeakerCard";
import { useRouter } from "next/router";

const ThroughTheLookingGlass = () => {
  const speakerPositions = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
  const router = useRouter();

  // UseRef to track rotation and avoid unnecessary re-renders
  const rotationRef = useRef(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newRotation = scrollPosition * 0.4; // Adjust rotation factor for smoothness

      // Use requestAnimationFrame for smooth transitions
      requestAnimationFrame(() => {
        rotationRef.current = newRotation;
        if (imageRef.current) {
          imageRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        }
      });
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
        <p className={styles.description}>
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
        {speakerPositions.map((position, index) => (
          <SpeakerCard key={index} position={position} />
        ))}
      </section>
      <section className={styles.ticketsSection}>
        <div className={styles.ticketsContent}>
          <div className={styles.ticketsTitle}>
            <h2 className={styles.grabYour}>GRAB YOUR</h2>
          </div>
          <p className={styles.ticketsSubtitle}>Tickets</p>
        </div>
        <Link href="/register">
          <button className={styles.ticketButton}>tap here</button>
        </Link>
      </section>
    </main>
  );
};

export default ThroughTheLookingGlass;

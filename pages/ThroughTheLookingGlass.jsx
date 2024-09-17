import React from "react";
import Link from "next/link";
import styles from "./ThroughTheLookingGlass.module.css";
import SpeakerCard from "./SpeakerCard";
import { useRouter } from "next/router";

const ThroughTheLookingGlass = () => {
  const speakerPositions = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

  const router = useRouter();

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
          <div className={styles.image} />
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

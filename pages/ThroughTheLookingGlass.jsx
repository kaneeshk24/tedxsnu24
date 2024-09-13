import React from 'react';
import styles from './ThroughTheLookingGlass.module.css';
import SpeakerCard from './SpeakerCard';

const ThroughTheLookingGlass = () => {
  const speakerPositions = [
    'topLeft', '', 'topRight',
    '', '', '',
    '', '', '',
    'bottomLeft', '', 'bottomRight'
  ];

  return (
    <main className={styles.container}>
      <h1>
        <span className={styles.title}>Through</span>
        <span className={styles.titleEnd}>The</span>
        <span className={styles.title}>Looking</span>
        <span className={styles.titleEnd}>Glass</span>
      </h1>
      <section className={styles.contentWrapper}>
        <p className={styles.description}>
          Beneath the violet twilight, an iridescent fog drifted through the ancient forest, where whispers of forgotten legends intertwined with the rustling of leaves.
          <br />
          Here, time seemed to slow, and the boundaries between reality and dream blurred. A single, delicate flower bloomed in the center, its petals shimmering like stardust.
        </p>
        <div className={styles.imageWrapper}>
          <div className={styles.image} />
        </div>
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
          <p className={styles.ticketsSubtitle}>
            Ti<span style={{ letterSpacing: '16.05px' }}>ck</span>
            <span style={{ letterSpacing: '3.21px' }}>e</span>
            <span style={{ letterSpacing: '9.63px' }}>t</span>s
          </p>
        </div>
        <button className={styles.ticketButton}>tap here</button>
      </section>
    </main>
  );
};

export default ThroughTheLookingGlass;
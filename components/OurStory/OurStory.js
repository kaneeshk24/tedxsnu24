import React from 'react';
import styles from './OurStory.module.css';

const OurStory = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.titleUnderline}>OUR STORY</span>
      </h2>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <p className={styles.cardText}>TEDx is a club that enables the exchange of valuable ideas. Our events: 'Qissa, Come Connect, and our flagship TEDxShivNadar University Conference, unite people to share knowledge and inspire curiosity.</p>
          <p className={styles.cardText}>In our club more than 50+ talented students bring these events to life. From organizing logistics to curating speakers, our teams collaborate to create an impactful experience.</p>
        </div>
        
        <div className={styles.card}>
          <p className={styles.cardText}>The TEDxShivNadar University Conference consists of a lineup of speakers from diverse backgrounds.</p>
          <p className={styles.cardText}>The conference provides a safe environment for sharing new ideas that spark meaningful conversations and broaden perspectives, joining us on a journey to ignite minds and make a positive impact on our community and beyond.</p>
        </div>
      </div>
      
      <div className={styles.buttonContainer}>
        <a href="/aboutus" className={styles.button}>
          Know More →
        </a>
      </div>
      
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <p className={styles.statNumber}>700+</p>
          <p className={styles.statText}>Attendees</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statNumber}>60+</p>
          <p className={styles.statText}>Speakers</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statNumber}>15+</p>
          <p className={styles.statText}>Performances</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
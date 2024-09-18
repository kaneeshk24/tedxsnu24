import React from 'react';
import styles from './OurStory.module.css';
import Link from 'next/link';

const OurStory = () => {
  return (
    <div className={styles.ourStory}>
      <h2 className={styles.title}>OUR STORY</h2>
      
      <div className={styles.contentBox}>
        <div className={styles.textBox}>
          <p>
            TEDx is a club that enables the exchange of valuable ideas. Our events - Qissa, Come
            Connect, and our flagship TEDxShivNadar University Conference, unite people to
            share knowledge and inspire curiosity.
          </p>
          <p>
            In our club more than 50 talented students bring these events to life. From organizing
            logistics to curating speakers, our teams collaborate to create an impactful
            experience.
          </p>
        </div>
        <div className={styles.textBox}>
          <p>
            The TEDxShivNadar University Conference consists of a lineup of speakers from diverse
            backgrounds.
          </p>
          <p>
            The conference provides a safe environment for sharing of new ideas that spark
            meaningful conversations and broaden perspectives. Join us on a journey to ignite
            minds and make a positive impact on our community and beyond.
          </p>
        </div>
      </div>
      
      {/* Mobile version text box */}
      <div className={styles.mobileTextBox}>
        <p>
          TEDx is a club that enables the exchange of valuable ideas. Our events - Qissa, Come
          Connect, and our flagship TEDxShivNadar University Conference, unite people to
          share knowledge and inspire curiosity.
        </p>
        <p>
          In our club more than 50 talented students bring these events to life. From organizing
          logistics to curating speakers, our teams collaborate to create an impactful
          experience.
        </p>
        <p>
          The TEDxShivNadar University Conference consists of a lineup of speakers from diverse
          backgrounds.
        </p>
        <p>
          The conference provides a safe environment for sharing of new ideas that spark
          meaningful conversations and broaden perspectives. Join us on a journey to ignite
          minds and make a positive impact on our community and beyond.
        </p>
      </div>
      
      <Link href="/aboutus"><button className={styles.knowMore}>Know More →</button></Link>
      
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h3>700+</h3>
          <p>Attendees</p>
        </div>
        <div className={styles.statItem}>
          <h3>15+</h3>
          <p>Performances</p>
        </div>
        <div className={styles.statItem}>
          <h3>60+</h3>
          <p>Speakers</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
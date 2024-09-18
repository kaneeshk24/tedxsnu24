import React, { useState } from 'react';
import styles from './Sponsors.module.css';
import Link from 'next/link';

const Sponsors = () => {
  const [startIndex, setStartIndex] = useState(0);
  const sponsorsPerPage = 21;

  // Placeholder for sponsor data - replace with actual data
  const sponsors = [
    { url: "/Images/Sponsors/spons2.svg" },
    { url: "/Images/Sponsors/spons3.svg" },
    { url: "/Images/Sponsors/spons4.svg" },
    { url: "/Images/Sponsors/spons5.svg" },
    { url: "/Images/Sponsors/spons6.svg" },
    { url: "/Images/Sponsors/spons7.svg" },
    { url: "/Images/Sponsors/spons8.svg" },
    { url: "/Images/Sponsors/spons9.svg" },
    { url: "/Images/Sponsors/spons10.svg" },
    { url: "/Images/Sponsors/spons11.svg" },
    { url: "/Images/Sponsors/spons12.svg" },
    { url: "/Images/Sponsors/spons13.svg" },
    { url: "/Images/Sponsors/spons14.svg" },
    { url: "/Images/Sponsors/spons15.svg" },
    { url: "/Images/Sponsors/spons16.svg" },
    { url: "/Images/Sponsors/spons17.svg" },
    { url: "/Images/Sponsors/spons18.svg" },
    { url: "/Images/Sponsors/spons19.svg" },
    { url: "/Images/Sponsors/spons20.svg" },
    { url: "/Images/Sponsors/spons21.svg" },
    { url: "/Images/Sponsors/spons22.svg" },
    { url: "/Images/Sponsors/spons23.svg" },
    { url: "/Images/Sponsors/spons1.svg" },
    { url: "/Images/Sponsors/s25.png" },
    { url: "/Images/Sponsors/s26.png" },
    { url: "/Images/Sponsors/s27.png" },
    { url: "/Images/Sponsors/s28.png" },
    { url: "/Images/Sponsors/s29.png" },
    { url: "/Images/Sponsors/s30.png" },
    { url: "/Images/Sponsors/s31.png" },
    { url: "/Images/Sponsors/s32.png" },
    { url: "/Images/Sponsors/s33.png" },
    { url: "/Images/Sponsors/s34.png" },
    { url: "/Images/Sponsors/s35.png" },
    { url: "/Images/Sponsors/s36.png" },
    { url: "/Images/Sponsors/s37.png" },
    { url: "/Images/Sponsors/s38.png" },
    { url: "/Images/Sponsors/s39.png" },
    { url: "/Images/Sponsors/s40.png" },
    { url: "/Images/Sponsors/s41.png" },
    { url: "/Images/Sponsors/s42.png" },
    { url: "/Images/Sponsors/s43.png" },
    { url: "/Images/Sponsors/s44.png" },
    { url: "/Images/Sponsors/s45.png" },
    { url: "/Images/Sponsors/s46.png" },
    { url: "/Images/Sponsors/s47.png" },
    { url: "/Images/Sponsors/s48.png" },
    { url: "/Images/Sponsors/s49.png" },
    { url: "/Images/Sponsors/s50.png" },
    { url: "/Images/Sponsors/s51.png" },
    { url: "/Images/Sponsors/s52.png" },
    { url: "/Images/Sponsors/s53.png" },
    { url: "/Images/Sponsors/s54.png" },
    { url: "/Images/Sponsors/s55.png" },
    { url: "/Images/Sponsors/s56.png" },
    { url: "/Images/Sponsors/s57.png" },
    { url: "/Images/Sponsors/s58.png" },
    { url: "/Images/Sponsors/s59.png" },
    { url: "/Images/Sponsors/s60.png" },
]

  const nextSponsors = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + sponsorsPerPage, sponsors.length - sponsorsPerPage));
  };

  const prevSponsors = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - sponsorsPerPage, 0));
  };

  return (
    <div className={styles.sponsorsContainer}>
      <h1 className={styles.title}>OUR SPONSORS</h1>
      <div className={styles.underline}></div>
      
      <div className={styles.sponsorDiv}>
      <button onClick={prevSponsors} className={`${styles.navButton} ${styles.prevButton}`}>
          &lt;
        </button>

        <div className={styles.sponsorsGrid}>
        
        {sponsors.slice(startIndex, startIndex + sponsorsPerPage).map(sponsor => (
          <div key={sponsor.id} className={styles.sponsorItem}>
            {/* Replace with actual image component */}
            <img className={styles.placeholderImage} src={sponsor.url}>
            </img>
            </div>
        ))}
        
        
      </div>

        <button onClick={nextSponsors} className={`${styles.navButton} ${styles.nextButton}`}>
          &gt;
        </button>
      </div>
      
      
      <Link href='/contact'> 
      <button className={styles.sponsorUsButton}>
        Sponsor Us →
      </button>
      </Link>
    </div>
  );
};

export default Sponsors;

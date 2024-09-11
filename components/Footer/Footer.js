import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>CONTACT US</h2>
      
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <span className={styles.dot}>•</span>
        <Link href="/aboutus">About Us</Link>
        <span className={styles.dot}>•</span>
        <Link href="/sponsors">Sponsors</Link>
        <span className={styles.dot}>•</span>
        <Link href="/pastConferences">Past Conferences</Link>
      </nav>
      
      <div className={styles.socialIcons}>
        <Link href='mailto:tedx.club@snu.edu.in' target="_blank" rel="noopener noreferrer"><img src='/Logos/gmail.svg'></img></Link>
        <Link href='https://www.instagram.com/tedxshivnadaruniversity/' target="_blank" rel="noopener noreferrer"><img src='/Logos/Linkedin.svg'></img></Link>
        <Link href='https://www.linkedin.com/company/tedx-snioe/mycompany/' target="_blank" rel="noopener noreferrer"><img src='/Logos/insta.svg'></img></Link>
      </div>
      
      <div className={styles.tedxLogo}>
        <span className={styles.ted}>
          <img src='/Images/tedlogo.png' alt="TED Logo" className={styles.tedLogo} />
        </span>
        {/* <span className={styles.university}>ShivNadarUniversity</span> */}
      </div>
    </footer>
  );
};

export default Footer;
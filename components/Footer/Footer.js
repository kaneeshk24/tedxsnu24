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
        <Link href="/past-conferences">Past Conferences</Link>
      </nav>
      
      <div className={styles.socialIcons}>
        <Link href='tedx@gmail.com'><img src='/Logos/gmail.svg'></img></Link>
        <Link href='tedx@gmail.com'><img src='/Logos/Linkedin.svg'></img></Link>
        <Link href='tedx@gmail.com'><img src='/Logos/insta.svg'></img></Link>
      </div>
      
      <div className={styles.tedxLogo}>
        <span className={styles.ted}>TED<sup>x</sup></span>
        <span className={styles.university}>ShivNadarUniversity</span>
      </div>
    </footer>
  );
};

export default Footer;
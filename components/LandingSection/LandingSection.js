import React, { useEffect, useState } from 'react';
import Link from "next/link";
import './LandingSection.scss';


export default function LandingSection() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
          setFadeIn(true);
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
  }, []);

    return (
        <>
            <div className="hero-sect">
                <div className="hero-banner">
                    <div className="frame-parent">
                        <div className="txt-ted-wrapper">
                            <div className="txt-ted">
                                <div className="ted">TED</div>
                            </div>
                        </div>
                        <div className="vector-wrapper">
                            <img className="vector-icon4" alt="" src="/Images/LandingPage/Vector.png" />
                        </div>
                    </div>
                    <div className="shiv-nadar-university-wrapper">
                        <div className="ted1">SHIV NADAR UNIVERSITY</div>
                    </div>
                </div>
                <div className="hero-line">
                    <div className="line"></div>
                </div>
            </div>
            <div className={`sect-2 ${fadeIn ? 'fade-in' : ''}`}>
                <Link href="/ThroughTheLookingGlass">
                    <button className={`conference-button ${fadeIn ? 'fade-in' : ''}`}>
                        <span className="conference-text">Through The Looking Glass</span>
                    </button>
                </Link>
            </div>
        </>
    );
}
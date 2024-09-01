import React, { useEffect, useRef } from 'react';
import './LandingSection.scss';

export default function LandingSection() {

    return (
      <><div className="hero-sect">
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
      <div className="sect-2">
          <b className="conference">CONFERENCE</b>
      </div></>
    ); 

}
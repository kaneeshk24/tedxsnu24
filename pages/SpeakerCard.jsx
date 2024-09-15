import React from 'react';
import styles from './ThroughTheLookingGlass.module.css';

const SpeakerCard = ({ position }) => {
  let cardStyle = styles.speakerCard;
  
  switch(position) {
    case 'topLeft':
      cardStyle += ` ${styles.speakerCardTopLeft}`;
      <div className={styles.caption}>Ashvina</div>
      break;
    case 'topRight':
      cardStyle += ` ${styles.speakerCardTopRight}`;
      <div className={styles.caption}>Ashvina</div>
      break;
    case 'bottomLeft':
      cardStyle += ` ${styles.speakerCardBottomLeft}`;
      <div className={styles.caption}>Ashvina</div>
      break;
    case 'bottomRight':
      cardStyle += ` ${styles.speakerCardBottomRight}`;
      <div className={styles.caption}>Ashvina</div>
      break;
    default:
      break;
  }



  return <div className={cardStyle}></div> ;
};

export default SpeakerCard;
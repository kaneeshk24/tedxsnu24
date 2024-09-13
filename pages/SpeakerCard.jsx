import React from 'react';
import styles from './ThroughTheLookingGlass.module.css';

const SpeakerCard = ({ position }) => {
  let cardStyle = styles.speakerCard;
  
  switch(position) {
    case 'topLeft':
      cardStyle += ` ${styles.speakerCardTopLeft}`;
      break;
    case 'topRight':
      cardStyle += ` ${styles.speakerCardTopRight}`;
      break;
    case 'bottomLeft':
      cardStyle += ` ${styles.speakerCardBottomLeft}`;
      break;
    case 'bottomRight':
      cardStyle += ` ${styles.speakerCardBottomRight}`;
      break;
    default:
      break;
  }

  return <div className={cardStyle} />;
};

export default SpeakerCard;
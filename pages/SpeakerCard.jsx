import React from 'react';
import styles from './ThroughTheLookingGlass.module.css';

const SpeakerCard = ({ position }) => {
  let cardStyle = styles.speakerCard;
  let captionText = '';
  
  switch(position) {
    case 'topLeft':
      cardStyle += ` ${styles.speakerCardTopLeft}`;
      captionText = 'Humaira Mushtaq: Professional racing driver ';
      break;
    case 'topRight':
      cardStyle += ` ${styles.speakerCardTopRight}`;
      captionText = 'Sudhana Shanker: A versatile Bharatnatyam performer';
      break;
    case 'bottomLeft':
      cardStyle += ` ${styles.speakerCardBottomLeft}`;
      captionText = "Sampath G. : Author & editor at The Hindu";
      break;
    case 'bottomRight':
      cardStyle += ` ${styles.speakerCardBottomRight}`;
      captionText = 'More To Be Revealed';
      break;
    default:
      break;
  }



  return <div className={cardStyle}>
    <div className={styles.caption}>{captionText}</div>
</div> ;
};

export default SpeakerCard;
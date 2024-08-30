import React, {useState} from 'react';
import Image from 'next/image';
import styles from './Conference.module.css';
import YearList from './YearList/YearList';

const conferenceData = {
    2023: {
      title: "CONFERENCE 2023",
      description: "Description for 2023 conference...",
      images: ["/2023-image1.jpg", "/2023-image2.jpg", "/2023-image3.jpg"]
    },
    2022: {
      title: "CONFERENCE 2022",
      description: "Description for 2022 conference...",
      images: ["/2022-image1.jpg", "/2022-image2.jpg", "/2022-image3.jpg"]
    },
    // ... Add data for other years
    2016: {
      title: "CONFERENCE 2016",
      description: "TEDxGHCol 2016 conference hosted 13 speakers and artists from various professional and social fields. This conference was nothing short of a spectacle of stories and lessons from exceptional people which inspired and captivated everyone who witnessed it.",
      images: ["/2016-image1.jpg", "/2016-image2.jpg", "/2016-image3.jpg"]
    }
  };


  
  const Conference = () => {
    const years = Object.keys(conferenceData).map(Number).sort((a, b) => b - a);
    const [activeYear, setActiveYear] = useState(years[0]);
  
    const handleYearClick = (year) => {
      setActiveYear(year);
    };
  
    const activeConference = conferenceData[activeYear];
  
    return (
      <div className={styles.conferenceContainer}>
        <h1 className={styles.title}>PAST CONFERENCES</h1>
        
        <YearList 
          years={years} 
          activeYear={activeYear} 
          onYearClick={handleYearClick} 
        />
        
        <h2 className={styles.subtitle}>{activeConference.title}</h2>
        
        <p className={styles.description}>{activeConference.description}</p>
        
        <div className={styles.imageGrid}>
          {activeConference.images.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image src={src} alt={`Conference image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
        
        <div className={styles.pagination}>
          {/* Add your pagination component here */}
        </div>
      </div>
    );
  };
  
  export default Conference;
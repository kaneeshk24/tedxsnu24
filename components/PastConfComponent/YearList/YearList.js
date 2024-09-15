// YearList.js
import React from 'react';
import styles from './YearList.module.css';

const YearList = ({ years, activeYear, onYearClick }) => {
  return (
    <div className={styles.yearList}>
      {years.map((year, index) => (
        <React.Fragment key={year}>
          <span 
            className={`${styles.year} ${year === activeYear ? styles.activeYear : ''}`}
            onClick={() => onYearClick(year)}
          >
            {year}
          </span>
          {index < years.length - 1 && <span className={styles.dot}>•</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default YearList;


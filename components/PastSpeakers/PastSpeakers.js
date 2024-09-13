import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PastSpeakers.scss';

const speakersData = [
  {
    name: 'Kapil Dev',
    image: '/Images/PastSpeakers/kapil dev.jpg',
    description: 'Kapil Dev description here.'
  },
  {
    name: 'Rishab',
    image: '/Images/CurrentSpeakers/rishab.png',
    description: 'Rishab description here.'
  },
  {
    name: 'Ankur Warikoo',
    image: '/Images/PastSpeakers/ankur warikoo.jpg',
    description: 'Ankur Warikoo description here.'
  },
  {
    name: 'Vanika Sangtani',
    image: '/Images/PastSpeakers/Vanika Sangtani.jpg',
    description: 'Vanika Sangtani description here.'
  },
  {
    name: 'Ritika Khatnani',
    image: '/Images/PastSpeakers/ritika.JPG',
    description: 'Ritika Khatnani description here.'
  },
  {
    name: 'Sudhir R',
    image: '/Images/PastSpeakers/sudhir.jpg',
    description: 'Sudhir R description here.'
  },
  {
    name: 'Anubha Bajaj',
    image: '/Images/CurrentSpeakers/anubha_bajaj.jpeg',
    description: 'Anubha Bajaj description here.'
  }
];

function PastSpeakers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className='container'>
      <h2 className='heading'>PAST SPEAKERS</h2>
      <div className='card-holder'>
        <Slider {...settings}>
          {speakersData.map((speaker, index) => (
            <div key={index} className='cards'>
              <div className='imageHolder'>
                <img src={speaker.image} alt={speaker.name} className='speakerImage' />
              </div>
              <div className='textHolder'>
                <p className='speakerName'>{speaker.name}</p>
                <p className='speakerTitle'>{speaker.title || 'Speaker'}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className='description'>
          <p>{speakersData[currentSlide].description}</p>
        </div>
      </div>
      <button className='viewAllButton'>View All →</button>
    </div>
  );
}

export default PastSpeakers;
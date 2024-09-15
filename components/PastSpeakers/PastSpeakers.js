import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PastSpeakers.scss';

const speakersData = [
  {
    name: 'Kapil Dev',
    image: '/Images/PastSpeakers/kapil dev.jpg',
    description: 'In organizing this event im sure a lot of you are learning so much, because life is about management.',
    sayer:" - Seema Rao (Special Forces Trainer)"

  },
  {
    name: 'Rishabh Jain',
    image: '/Images/CurrentSpeakers/rishab.png',
    description: 'The organization is great, the children are enthusiastic, the setup was beautiful. It was a good experience.',
    sayer:"- Aastha Khanna (Intimacy Coordinator)"
  },
  {
    name: 'Ankur Warikoo',
    image: '/Images/PastSpeakers/ankur warikoo.jpg',
    description: "I grew up watching TEDx, and I was inspired by it and wanted to Stand there at one point in my life. This was surreal and i'm just happy."
    ,sayer:"- Aashima Mahajan (Coke Studio Singer)"
  },
  {
    name: 'Vanika Sangtani',
    image: '/Images/PastSpeakers/Vanika Sangtani.jpg',
    description: 'The campus is beautiful, the hospitality the accommodation was perfect but most importantly the students behind the TedX conference was the highlight. '
    ,"sayer":"-Kavita Emanuel (Social Activist) 2022"
  },
  {
    name: 'Ritika Khatnani',
    image: '/Images/PastSpeakers/ritika.JPG',
    description: 'Coming to the campus was very nice, the auditorium was excellent. Full marks and credit to the university. '
    ,"sayer":"-Prof Dr Sanjeev Bagai (Pediatrician and Nephrologist)"
  },
  {
    name: 'Sudhir R',
    image: '/Images/PastSpeakers/sudhir.jpg',
    description: "I grew up watching TEDx, and I was inspired by it and wanted to Stand there at one point in my life. This was surreal and i'm just happy."
    ,sayer:"- Aashima Mahajan (Coke Studio Singer)"
  },
  {
    name: 'Anubha Bajaj',
    image: '/Images/CurrentSpeakers/anubha_bajaj.jpeg',
   description: 'In organizing this event im sure a lot of you are learning so much, because life is about management.',
    sayer:" - Seema Rao (Special Forces Trainer)"
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
          <div className='sayer'>
          <p>{speakersData[currentSlide].sayer}</p>
        </div>
        
        </div>
      </div>
      <button className='viewAllButton'>View All →</button>
    </div>
  );
}

export default PastSpeakers;
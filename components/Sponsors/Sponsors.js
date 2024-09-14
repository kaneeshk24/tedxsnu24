import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Sponsors.scss';

const SponsorCarousel = () => {
  const sponsors = [
    '/Images/Sponsors/s1.png',
    '/Images/Sponsors/s2.png',
    '/Images/Sponsors/s3.png',
    '/Images/Sponsors/s4.png',
    '/Images/Sponsors/s5.png',
    '/Images/Sponsors/s6.png',
    '/Images/Sponsors/s7.png',
    '/Images/Sponsors/s8.png',
    '/Images/Sponsors/s9.png',
    '/Images/Sponsors/s10.png',
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className="sponsor-carousel">
    <h2 className="sponsor-carousel__title">Past Sponsors</h2>
    <div className="sponsor-carousel__wrapper">
      <div className="sponsor-carousel__container">
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-carousel__item">
              <img src={sponsor} alt={`Sponsor ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
  );
};

export default SponsorCarousel;
import { useEffect, useState } from 'react';
import './AboutUs.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function AboutUs() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { url: "/Images/Assets/2023/20230924-IMG_6576.jpg" },
    { url: "/Images/Assets/2023/20220626-IMG__6382.jpg" },
    { url: "/Images/Assets/2023/20230924-IMG__7135.jpg" },
    { url: "/Images/Assets/2023/20230924-IMG__7155.jpg" },
    { url: "/Images/Assets/2023/20230924-IMG__7233.jpg" },
    { url: "/Images/Assets/2023/20220626-IMG__6418.jpg" },
    { url: "/Images/Assets/2023/20230924-IMG_6878.jpg" },
  ];

  return (
    <div className='AboutUs'>
      <div className='AboutUs__heading'>
        WHO WE ARE
      </div>
      <div className='AboutUs__content'>
        <div className='AboutUs__content--text'>
          TEDx is a vibrant club dedicated to fostering the exchange of valuable ideas. Through events like Qissa, Come Connect, and our flagship TEDxShivNadar University Conference, we unite people to share knowledge and inspire one another. Our club comprises over 50 passionate students, each contributing unique talents to bring these events to life. From organizing logistics to curating speakers, our teams collaborate to create engaging and impactful experiences. At the TEDxShivNadar University Conference, we meticulously select diverse speakers who represent a spectrum of backgrounds and expertise. This annual gathering cultivates an atmosphere where insightful and inspiring ideas flow freely, sparking meaningful conversations and broadening perspectives. Join us as we continue to cultivate spaces that celebrate curiosity, learning, and the transformative power of ideas. Together, we aim to ignite minds and make a positive impact on our community and beyond.
        </div>
        <div className='AboutUs__content--carousel'>
          <Carousel 
            autoPlay 
            infiniteLoop 
            interval={3500} 
            transitionTime={500}
            //showThumbs={false}
            showStatus={false}
          >
            {images.map((item, index) => (
              <div key={index}>
                <img src={item.url} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

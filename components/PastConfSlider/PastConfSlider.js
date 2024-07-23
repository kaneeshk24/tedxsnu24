import React, { useState } from 'react';
import './PastConfSlider.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function PastConfSlider({ onConferenceClick }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { url: "/Images/pastconf/2021_ted.jpg", conferenceId: 'conf0' },
        { url: "/Images/pastconf/2019_ted.jpg", conferenceId: 'conf3' },
        { url: "/Images/pastconf/2020_ted.jpg", conferenceId: 'conf2' },
        { url: "/Images/pastconf/2021_ted.jpg", conferenceId: 'conf1' },
        { url: "/Images/pastconf/2022_ted.jpg", conferenceId: 'conf4' },
        { url: "/Images/pastconf/2018_ted.jpg", conferenceId: 'conf5' },
    ];

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
        onConferenceClick(images[index].conferenceId);
    };

    return (
        <div className='Main--carousel'>
            <Carousel
                selectedItem={currentSlide}
                onChange={handleSlideChange}
                showArrows={true}
                showIndicators={false}
                showStatus={false}
                swipeable={true}
            >
                {images.map((item, index) => (
                    <img key={index} src={item.url} alt={`Slide ${index + 1}`} />
                ))}
            </Carousel>
        </div>
    );
}

export default PastConfSlider;
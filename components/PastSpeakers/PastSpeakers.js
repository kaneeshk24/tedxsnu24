import './PastSpeakers.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState, useEffect } from 'react'

export default function PastSpeakers() {
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSmall(true);
                setIsMedium(false);
            } else if (window.innerWidth > 768 && window.innerWidth <= 1200) {
                setIsSmall(false);
                setIsMedium(true);
            } else {
                setIsSmall(false);
                setIsMedium(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='PastSpeakers'>
            <div className='PastSpeakers__heading'>
                OUR PAST SPEAKERS
            </div>
            <div className='PastSpeakers__cards'>
                <div className="container">
                    <h3 className="title">Kapil Dev</h3>
                    <div className="content">
                        <div>
                            <div className="content-overlay"></div>
                            <img className="content-image" src="/Images/PastSpeakers/kapil dev.jpg" alt="" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Kapil Dev</h3>
                                <p className="content-text">Kapil Dev Nikhanj is an Indian former cricketer. He is regarded as one of the greatest all-rounders in the history of cricket, he was a fast-medium bowler and a hard-hitting middle-order batsman</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="title">Rishab Jain</h3>
                    <div className="content">
                        <div>
                            <div className="content-overlay"></div>
                            <img className="content-image" src="/Images/CurrentSpeakers/rishab.png" alt="" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Rishab Jain</h3>
                                <p className="content-text">India&apos;s most famous personal finance advisor with over 4 million YouTube subscribers. Having been an IIT-B alum and founding 2 successful startups, meet the phenomenal Rishabh Jain, the labour law advisor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="title">Ankur Warikoo</h3>
                    <div className="content">
                        <div>
                            <div className="content-overlay"></div>
                            <img className="content-image" src="/Images/PastSpeakers/ankur warikoo.jpg" alt="" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Ankur Warikoo</h3>
                                <p className="content-text">Ankur Warikoo is an entrepreneur and content creator whose deep, witty and brutally honest thoughts on success and failure, money and investing, self-awareness and personal relationships.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="title">Vanika Sangtani</h3>
                    <div className="content">
                        <div>
                            <div className="content-overlay"></div>
                            <img className="content-image" src="/Images/PastSpeakers/Vanika Sangtani.jpg" alt="" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Vanika Sangtani</h3>
                                <p className="content-text">Vanika Sangtani. Travel Experience Curator | Storyteller | Founder at Denied. 4mo Edited. Catch me live today on CNBC-TV18 where I perform my poetry and stories in front of Women Achievers from different fields.</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="container">
                    <h3 className="title">Ritika Khatnani</h3>
                    <div className="content">
                        <div>
                            <div className="content-overlay"></div>
                            <img className="content-image" src="/Images/PastSpeakers/ritika.JPG" alt="" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Ritika Khatnani</h3>
                                <p className="content-text">Ritika Khatnani, winner of Miss Supranational Asia 2022 was once denied admission into a school because her mother was a single parent.</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="container">
                    <h3 className="title">Sudhir R</h3>
                    <div className="content">
                        <div>
                            <div className="content-overlay"></div>
                            <img className="content-image" src="/Images/PastSpeakers/sudhir.jpg" alt="" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Sudhir R</h3>
                                <p className="content-text">India's First Flute boxer Semi finalist in Asia's Got Talent. Semi finalist in India's Got Talent. Winner of MTV Nescafe labs. Limca book Records</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

             <div className='PastSpeakers__heading'>
                OUR PAST PERFORMERS
             </div>
                <div className='PastSpeakers__cards'>
                    <div className="container">
                        <h3 className="title">Anubha Bajaj</h3>
                        <div className="content">
                            <div>
                                <div className="content-overlay"></div>
                                <img className="content-image" src="/Images/CurrentSpeakers/anubha_bajaj.jpeg" alt="" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Anubha Bajaj</h3>
                                    <p className="content-text">Anubha Bajaj is an Indie artist, and the enchantress behind the captivating &quot;Lamhey&quot;. From composing melodies that transcend time to harmonizing emotions through music, Anubha&apos;s journey is a tapestry of crafted experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="title">Aashima Mahajan</h3>
                        <div className="content">
                            <div>
                                <div className="content-overlay"></div>
                                <img className="content-image" src="/Images/PastSpeakers/Aashima Mahajan.jpg" alt="" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Aashima Mahajan</h3>
                                    <p className="content-text">Aashima Mahajan is a multifaceted artist known for her contributions as a singer, actor, composer, and performer. With a diverse array of talents, she has made a significant impact in various areas of the entertainment industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="title">Anurag Vashisht</h3>
                        <div className="content">
                            <div>
                                <div className="content-overlay"></div>
                                <img className="content-image" src="/Images/PastSpeakers/anurag vashisht.PNG" alt="" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Anurag Vashisht</h3>
                                    <p className="content-text">Anurag is the king of the sad romantic genre of music. Anurag’s music is deeply connected to his hometown Manali, which has the simplicity and soul of the mountains. He wants to bring back the spirit in music.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
        
    );
}

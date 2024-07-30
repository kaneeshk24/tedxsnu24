import Link from 'next/link';
import './Sponsors.scss';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Sponsors() {
    const pastSponsors = [
        { url: "/Images/Sponsors/s1.png" },
        { url: "/Images/Sponsors/s2.png" },
        { url: "/Images/Sponsors/s3.png" },
        { url: "/Images/Sponsors/s4.png" },
        { url: "/Images/Sponsors/s5.png" },
        { url: "/Images/Sponsors/s6.png" },
        { url: "/Images/Sponsors/s7.png" },
        { url: "/Images/Sponsors/s8.png" },
        { url: "/Images/Sponsors/s9.png" },
        { url: "/Images/Sponsors/s10.png" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='Sponsors'>
            <div className='Sponsors__past'>
                <p className='Sponsors__past--heading'>PAST SPONSORS</p>
                <Slider {...settings}>
                    {pastSponsors.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: .7 }}
                            key={index}
                        >
                            <div style={{ backgroundColor: "white" }} className='Sponsors__past--cards__image'>
                                <img src={item.url} alt={`Sponsor ${index + 1}`} />
                            </div>
                        </motion.div>
                    ))}
                </Slider>
                <div className='Sponsors__past--button'>
                    <Link href='/sponsors'><p className='Sponsors__past--button__content'>View All</p></Link>
                </div>
            </div>
        </div>
    );
}
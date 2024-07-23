import React, { useEffect, useRef } from 'react';
import './LandingSection.scss';

export default function LandingSection() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const img = imgRef.current;

        video.controls = false;

        const captureFrame = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL();
            img.src = dataURL;
        };

        const handleVideoEnd = () => {
            captureFrame();
            video.style.display = 'none';
            img.style.display = 'block';
        };

        video.addEventListener('ended', handleVideoEnd);

        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    return (
        <div className='LandingPageContainer'>
            <div>
                <video 
                    ref={videoRef}
                    id="myVideo" 
                    src="/Vids/confVid.mp4" 
                    type="video/mp4" 
                    preload="auto"
                    autoPlay
                    muted 
                ></video>
                <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                <img ref={imgRef} alt="Last frame of the video" style={{ display: 'none', width: '100%', height: 'auto' }} />
            </div>
        </div>
    ); 

}

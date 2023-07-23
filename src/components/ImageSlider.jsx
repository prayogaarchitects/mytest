import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // You can style the slider in a separate CSS file if needed

export const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const  images = [
    'img/mainpage/3.jpeg',
    'img/mainpage/2.jpg',
    //'img/mainpage/1.jpg',
    'img/mainpage/4.png',
    'img/mainpage/5.jpg',
    'img/mainpage/6.jpg',
    'img/mainpage/7.jpeg',
    'img/mainpage/8.jpeg',    
    'img/mainpage/9.jpg',
    // Add more image URLs here
  ];
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 2000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [images.length, isPaused]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="image-slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="prev-button" onClick={prevImage}>
        &lt;
      </button>
      <div className="slider-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} />
        ))}
        {/* To create the continuous loop, repeat the images */}
        {images.map((imageUrl, index) => (
          <img key={`clone-${index}`} src={imageUrl} alt={`Image ${index}`} />
        ))}
      </div>
      <button className="next-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;

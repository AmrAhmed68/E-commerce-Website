import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to start the auto slideshow
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change slide every second

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it will run once on mount

  return (
    <div className='slider_container'>
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  ); 
};

export default ImageSlider;

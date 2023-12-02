import '../css/ImageLists.css';
import img1 from '../assests/cabingirl.jpg';


import img5 from '../assests/cabin2.avif';
import img6 from '../assests/cabin3.avif';


import React, { useState, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';

const ImageLists = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const images = [
    img1,
   
    img5,
    img6,
   


  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, images.length]);

  

  return (
    <Card className="slider-container" id="homeimg">
    {images.map((imageUrl, index) => (
      <CardMedia id="homeimg" component="img"image={imageUrl} className={index === slideIndex ? 'slide active' : 'slide'}/>
      
    ))}
   
  </Card>
  );
};

export default ImageLists;
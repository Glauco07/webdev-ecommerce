import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "../css/Slider.css"
import CarouselPages from './CarouselPages';


const ImageSlider = () => {
  const slides = [<CarouselPages />, <CarouselPages placeholder="true"/>]
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    setTimeout(nextSlide, 7000)
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              slide
            )}
          </div>
        );
      })}

    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>

    </section>
  );
};

export default ImageSlider;
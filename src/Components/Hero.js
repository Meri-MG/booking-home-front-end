/* eslint react/prop-types: 0 */
import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import Button from './Button';



const Hero = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { length } = slides;
  const timeout = useRef(null);

  useEffect(() => {
    // const nextSlide = () => {
    //   setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    // };
  //   timeout.current = setTimeout(nextSlide, 3000);
  //   return () => clearTimeout(timeout.current);
  // }, [currentSlide, length]);
  });

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    return () => clearTimeout(timeout.current);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    return () => clearTimeout(timeout.current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={slide.id}>
            {index === currentSlide && (
            <HeroSlider>
              <HeroImage src={slide.image} alt={slide.alt} />
              <HeroContent>
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>
                <Button
                  to={slide.path}
                  primary="true"
                  css={`max-width: 140px;
                  color: white;`}
                >
                  {slide.label}
                  <Arrow />
                </Button>
              </HeroContent>
            </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;

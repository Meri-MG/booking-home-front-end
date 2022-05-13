import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { getApartmentDetails } from '../Redux/Details/Details';
import Button from './Button';
import { getApartments } from '../Redux/Apartments/Apartments';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  $::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(odeg,
       rgba(0, 0, 0, 0.2) 0%,
       rgba(0, 0, 0, 0.2) 50%,
       rgba(0, 0, 0, 0.6) 100%);
`;

const HeroImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 23%;
  left: 23%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: white;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Arrow = styled(IoIosArrowRoundForward)`
  font-size: 2rem;
  margin-left: 10px;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  right: 50px;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const Hero = () => {
  const apartments = useSelector((state) => state.Apartments.apartments);
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { length } = apartments;
  const timeout = useRef(null);
  const showDetailsPage = (id) => {
    dispatch(getApartmentDetails(id)).then(() => {
    });
  };

  useEffect(() => {
    dispatch(getApartments());
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    return () => clearTimeout(timeout.current);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    return () => clearTimeout(timeout.current);
  };

  if (!Array.isArray(apartments) || apartments.length <= 0) return null;

  return (
    <HeroSection>
      <HeroWrapper>
        {apartments.map((slide, index) => (
          <HeroSlide key={slide.id}>
            {index === currentSlide && (
              <HeroSlider>
                <HeroImage src={slide.front} alt="House Image" />
                <HeroContent>
                  <h1>{slide.name}</h1>
                  <p>
                    <span>Market/Rental Price: $ </span>
                    {slide.price}
                  </p>
                  <Button
                    to={`/apartments/${slide.apartment}`}
                    primary="true"
                    css={`
                      max-width: 140px;
                      max-height: 40px;
                      color: white;
                    `}
                    onClick={() => {
                      showDetailsPage(slide.apartment);
                    }}
                  >
                    View Details
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

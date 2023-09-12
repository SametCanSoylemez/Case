import React, { useState, useEffect } from 'react';
import { SliderContainer, Slide, PrevButton, NextButton } from './slider.styles';

interface SlideProps {
  imgSrc: string;
  altText: string;
}

interface SliderProps {
  slides: SlideProps[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleNextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(slides.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    };

    return (
        <SliderContainer>
            {slides.map((slide, index) => (
                <Slide key={index} src={slide.imgSrc} active={index === activeSlide}></Slide>
            ))}
            <PrevButton onClick={handlePrevSlide}>&lt;</PrevButton>
            <NextButton onClick={handleNextSlide}>&gt;</NextButton>
        </SliderContainer>
    );
}

export default Slider;

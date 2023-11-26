// Slider.js

import React from 'react';
import styled from 'styled-components';
import { awards } from '../Clientdata/Data';
import { BiSolidChevronLeft } from "react-icons/bi";
import { BiSolidChevronRight } from "react-icons/bi";
const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding:0 0 0vh 0;
  @media (min-width:1000px){
    display:none; 
    }
    .ico{
      margin-top:5vh;
      font-size: 2rem;
      color: #328cc8;
      background-color:#e3e0d9;
      padding:10px;
     margin-right:10px;
     }
    
`;

const SliderContent = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numSlides}, 100%);
  transition: transform 0.5s ease-in-out;
   
`;

const Slide = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin:auto;
  height:auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid #eee;

  img {
    width: 80%;
    height: auto;
  }
`;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === awards.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? awards.length - 1 : prevIndex - 1));
  };

  return (
    <SliderContainer>
      
      <SliderContent numSlides={awards.length} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {awards.map((award, index) => (
          <Slide key={index}>
            <img src={award.ico_image} alt={award.alt} />
          </Slide>
        ))}
      </SliderContent>
      <span onClick={handlePrev} className='ico'><BiSolidChevronLeft/></span>
      <span onClick={handleNext} className='ico'><BiSolidChevronRight/></span>
    </SliderContainer>
  );
};

export default Slider;

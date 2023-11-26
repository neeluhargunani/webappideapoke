
import React, { useEffect, useState } from 'react';
import {
  HeroContainer,
  TextContainer,
  ActionButtons,
  ActionButton,
  CountdownContainer,
  ClockItem,
  CountdownText,
 
} from './Hero.styles';

const HeroBanner = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2023-11-30') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <HeroContainer>
      <TextContainer>
        <h1>Early Black Friday</h1>
        <p>Enjoy $1,350 in LUXURY SAVINGS</p>
        <h6>Sale Ends in:</h6>
        <CountdownContainer>
        <ClockItem>{timeLeft.hours.toString().padStart(2, '0')}</ClockItem>
        <ClockItem>{timeLeft.minutes.toString().padStart(2, '0')}</ClockItem>
        <ClockItem>{timeLeft.seconds.toString().padStart(2, '0')}</ClockItem>
      </CountdownContainer>
      
       <CountdownText>
      
       <h5><span>Hours</span> <span>Minutes</span> <span> Seconds</span></h5>
     
      </CountdownText>
      </TextContainer>
    
   
      <ActionButtons>
        <ActionButton>Shop Mattress</ActionButton>
        <ActionButton>Take The Quiz</ActionButton>
      </ActionButtons>
    </HeroContainer>
  );
};

export default HeroBanner;

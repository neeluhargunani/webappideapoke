import React from 'react'
import Navbar from './navbar/Navbar'
import HeroBanner from './HeroBanner/HeroBanner'
import PickYourPuffy from './section_cards/PickYourPuffy';
import styled from 'styled-components';
import AwardsLogos from './Awardssection/AwardsLogos';
import ProductSection from './product/ProductSection';
import Footer from './footer/Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <Container>
            <PickYourPuffy/>
            <AwardsLogos/>
        </Container>
        <ProductSection/>
        <Footer/>
    </div>
  )
}

export default Home;

const Container = styled.div`
max-width: 100%;
width: 80%;
margin: auto;
padding: 1.5rem 0;
position: relative;
@media only screen and (min-width:320px) {
  width:100%;
  margin: auto;
}
@media only screen and (min-width:1000px) {
  width: 80%;
}
}
`;
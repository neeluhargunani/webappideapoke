import React from 'react'
import { awards } from "../Clientdata/Data"

import styled from 'styled-components';
import Slider from './slider';

function AwardsLogos() {
  return (
  
  <AwardsRow>

        <h3>AWARDED BEST LUXURY MATTRESS 2024</h3>
        <Slider/>
       <Awardscolumns>
       
        {awards.map((dataAwards, i)=>(
  
    <div className="" key={i}>
                    <AwardsImages><Img src={dataAwards.ico_image} className="img-fluid" alt="AwardLogo"/></AwardsImages>
                   
                 
                  
                </div>
         
              
  ))}
  </Awardscolumns>
          </AwardsRow>

          
 
  )
}

export default AwardsLogos;



const AwardsRow = styled.div`
width:100%;
display:block;
box-sizing:border-box;
text-align:center;
padding:0 0 5vh 0;

h3{
    color: #605343;
font-family: PT Serif;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: 1;
@media (min-width:768px){

    font-size: 30px;
   
}

}
`;
const Awardscolumns = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
gap: 35px;
margin-top: 8vh;
width: 100%;
// margin: auto;

}





`;
   
const AwardsImages = styled.div`
width: 175px;
    height: 91px;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width:320px){
        display:none; 
        }
        @media (min-width:1000px){
            display:block; 
            }
    @media only screen and (min-width:1400px){
        width: 208px;
    }
    @media only screen and (min-width:1500px){
        width: 308px;
    }
`;
const Img = styled.img`
width:168px;
height:81px;
`;

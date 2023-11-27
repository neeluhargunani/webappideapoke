import styled from "styled-components";
import heroImage from "../../assets/heroban.png"
export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 618px;
  background: url(${heroImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align text to the right */

   @media only screen and (min-width:320px){
    background-position:64% 24%;
   }
   @media only screen and (min-width:700px){
    background-position: center;
   }
`;

export const TextContainer = styled.div`
  position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 40vw;
    height: inherit;
    flex-shrink: 0;
    padding-top: 6rem;
    background: rgba(244, 242, 238, 0.42);
    color: #000;
    @media only screen and (min-width:320px){
      padding-top:auto;
      margin-top:auto;
      width: 100vw;
      align-items: center;
      justify-content: center;
      }
      @media only screen and (min-width:768px){
      
        width: 50vw;
       
        }
      @media only screen and (min-width:1000px){
        padding-top:10%;
        margin-top:0;
        align-items: flex-start;
        justify-content: flex-start;
        width: 50vw;
        height: inherit;
        }
        @media only screen and (min-width:1000px){
        
          width: 50vw;
       
          }
          @media only screen and (min-width:1400px){
        
            width: 45vw;
         
            }
    h1{
        padding-left:5rem;
        color: #605343;
font-family: PT Serif;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media only screen and (min-width:320px){
  width:300px;
  font-size: 33px;
  padding-left:0rem;
  }
  @media only screen and (min-width:768px){
    
    font-size: 35px;
    padding-left:0rem;
    }
  @media only screen and (min-width:1000px){
    width:500px;
    font-size: 40px;
    padding-left:5rem;
    }
    @media only screen and (min-width:1400px){
      font-size: 45px;
      }
    }
    p{
  width:500px;
        padding-left:5rem;
        color: #605343;
font-family: PT Serif;
font-size: 45px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin:0;
@media only screen and (min-width:320px){
  width:300px;
  font-size: 33px;
  padding-left:0rem;
  }
  @media only screen and (min-width:1000px){
    width:500px;
    font-size: 40px;
    padding-left:5rem;
    }
    @media only screen and (min-width:1400px){
    
      font-size: 45px;
     
      }
    }
    h6{
        padding-left:5rem;
        color: #605343;
font-family: PT Serif;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin:0;
@media only screen and (min-width:320px){
  display:none;
  }
  @media only screen and (min-width:1000px){
    width:500px;
    font-size: 30px;
    padding-left:5rem;
    }
    
    }
    
     
    }
`;



export const ActionButtons = styled.div`
display: flex;
align-items:center;
justify-content:center;
position: absolute;
top: 70%;
left: 2%;
@media only screen and (min-width:320px){
  flex-direction:column;
 width:300px;
 left: 0;
  top:2%:
}
@media only screen and (min-width:415px){

 width:300px;
 left: 5rem;
 
}
@media only screen and (min-width:600px){

  width:400px;
  left: 5rem;
  
 }
@media only screen and (min-width:768px){
  width:300px;
 left: 0%;

}
@media only screen and (min-width:900px){
  
 left: 5%;

}
  @media only screen and (min-width:1000px){
    flex-direction:row;
 width:550px;
 top:58%;
 left: 2%;
      }
      @media only screen and (min-width:1200px){
        width:510px;
     top:63%;
 left: 3%;
          }
  @media only screen and (min-width:1400px){
        
        width: 600px;
        top:70%;
        }
        @media only screen and (min-width:1600px){
        
          width: 600px;
          top:70%;
          }
`;

export const ActionButton = styled.button`
  margin-right: 10px;
  display: flex;
padding: 13px 33px 17px 29px;
align-items: center;
border-radius: 10px;
background: #328CC8;
color: #FFF;
font-family: PT Serif;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
border: none;
@media only screen and (min-width:320px){
margin-bottom:1rem;
padding: 10px 33px 10px 29px;
font-size: 22px;
    }
    @media only screen and (min-width:1000px){
      margin-bottom:0;
     padding: 10px 20px 10px 20px;
      font-size: 25px;
        }
        @media only screen and (min-width:1400px){
          margin-bottom:0;
          padding: 10px 33px 10px 29px;
          font-size: 30px;
            }
`;
export const ClockItem = styled.div`
padding: 0.5rem;
background-color: #000;
border-radius: 0.2rem;
color: #fff;

`;
export const CountdownText = styled.div`
  margin-top: 1rem;
  text-align: center;
    
  h5 {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    align-items: center;
    padding-left: 5rem;
    gap: 1rem;
    @media only screen and (max-width:1000px){
      display:none;
     }
span {
    font-weight: 500;
    @media only screen and (max-width:1000px){
      display:none;
     }
  }
`
;
  export const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  /* color: #333; */
  align-items: center;
  padding-left: 5rem;
  gap: 1rem;
  @media only screen and (max-width:1000px){
   display:none;
  }

`;
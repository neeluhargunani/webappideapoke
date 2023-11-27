import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import {BiRestaurant} from 'react-icons/bi';
import {Container} from '../../Globalstyles';

export const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
background-color: #fff;

box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 80px;
${Container};

@media (max-width: 1000px) {
    align-items: left;
    justify-content: left;
}
`;
export const NavLogo = styled.a`
color: #fff;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
`;


export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 2.8rem;
    cursor: pointer;
}
`;

export const Menu = styled.ul`
display: flex;
align-items: center;


@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-120%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
 
}
@media only screen and (min-width:1000px) {
display: flex;
align-items: center;
justify-content: space-around;
width: 90%;
gap:.6rem;
}


`;

export const MenuItem = styled.li`
list-style: none;
height: 50px;
padding-left: 20px;
@media only screen and (min-width:1000px){
  padding-left: 0px;
}
@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;

export const MenuLink = styled.a`

text-decoration: none;
font-family: PT Serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-right: 30px;
color: #000;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 0rem;
height: 100%;
transition: all .2s ease;

&:hover {
    color: #157bc0;
    transform: traslateY(-3rem);
    
}
&:active {
    transform: traslateY(3rem);
    color: #E38B06;
}

@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: left;
    transition: all .2s ease;
    color:#fff;
    justify-content: left;
}
@media only screen and (min-width:1000px){
  margin-right: 2px;
  font-size: 15px;
}
@media only screen and (min-width:1400px){
 
  font-size: 18px;
}
/* align-items: center; */
justify-content: center;
&:hover {
  color: #61dafb;
}

`;

export const MenuItemBtn = styled.li`
list-style: none;

@media screen and (max-width:1000px){
    display: flex;
    justify-content: left;
    align-items: self-start;
    width: 95%;
    padding-top: 2rem;
    height: 120px;
    order: 4;
}
  
    

`;


export const SearchContainer = styled.div`
// display: flex;
align-items: center;
justify-content: start;
padding-left: 5rem;
    padding-right: 5rem;
display:flex;
@media only screen and (max-width:1000px){
    padding-left: 0rem;
    padding-right: 6rem;
    align-items: normal;
   
 }


@media only screen and (min-width:1000px){
  align-items: center;
  justify-content: center;
  display: flex;
  padding-right: 0rem;
  padding-left: 0rem;
}

@media only screen and (min-width:1200px){
  padding-left: 2rem;
}
`;

export const SearchInput = styled.input`
  padding: 8px;
  // margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const TopNav = styled(NavSection)`
  margin-bottom: 0px;
  border-bottom: 1px solid #328CC8;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
export const SaleText = styled.span`
  margin-left: 3rem;
  color: #000;
  font-family: PT Serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  @media only screen and (min-width: 1000px) {
    font-size: 14px;
    margin-left: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 18px;
    margin-left: 3rem;
  }
`;
export const LinksContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

@media only screen and (min-width:320px){
  display:none;
 }

@media only screen and (min-width:768px){
 display:none;
}
@media only screen and (min-width:1000px){
  display:flex;
 }
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
font-family: PT Serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
  margin-right: 30px;

  display: flex;
  gap:.5vh;
  /* align-items: center; */
  justify-content: center;
  &:hover {
    color: #61dafb;
  }
  @media only screen and (min-width:320px){
 display:none;
  }
 
  @media only screen and (min-width:1000px){
    margin-right: 13px;
    font-size: 15px;
    display:flex;
   
  }
  @media only screen and (min-width:1200px){
    margin-right: 30px;
    font-size: 18px;
   
  }
  
`;
export const MenuLinkBtn = styled.a`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;


`;
export const Img = styled.img`
width: 199.31px;
height: 50.896px;
transition: all .5s ease;

// &:hover {
//     transform: scale(.1);
// }
@media only screen and (min-width:320px){
width: 188.31px;
height: 50.896px;

}
@media only screen and (min-width:1000px){
  width: 141.31px;
  height: 42.896px;
  
}
@media only screen and (min-width:1200px){
  width: 199.31px;
height: 50.896px;
padding-left:15px;
}
`;

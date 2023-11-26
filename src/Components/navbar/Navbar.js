import React, {useState, useEffect} from 'react';
import Logo from "../../assets/Logo.svg"
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";


import 
{
    Nav,
    NavbarContainer,
    NavLogo,
  TopNav,
  SaleText,
  LinksContainer,
  NavLink,
    MenuIcon,

    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    Img,
    SearchContainer,
    SearchInput,
} from './Navbar.styles';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
     
    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    
    return (
        <div>
           <TopNav>
        <SaleText>
          <span>EARLY BLACK FRIDAY SALE: $1,350 IN TOTAL SAVINGS</span> |{' '}
          <span>APPLY CODE AT CHECKOUT: EARLYFRIDAY</span>
        </SaleText>
        <LinksContainer>
          <NavLink href="/find-stores">
            <span>
             <BiLocationPlus/>
            </span>
            <span>Find Stores</span>
          </NavLink>
          <NavLink href="/support">
            <span>
             <BiPhone/>
            </span>
            <span>Support</span>
          </NavLink>
          <NavLink href="/my-account">
            <span>
              <BiSolidUserCircle/>
            </span>
            <span>My Account</span>
          </NavLink>
        </LinksContainer>
      </TopNav>
                <Nav>
                    
                    <NavbarContainer>
                        <NavLogo to="/">
                          
                         <Img src={Logo} alt="logo"/>
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                        {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                     
                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Matresses</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Smart Beds</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Bed Frames</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Bedding & More</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/"> Sale</MenuLink>
                            </MenuItem>
                       
                           
                            <MenuItemBtn>
                                {button?(
                                    <SearchContainer>
                                    <SearchInput type="text" placeholder="Search" /><Button primary><BiSearch/></Button>
                                  </SearchContainer>
                                ): (
                                    <SearchContainer >
                                    <SearchInput type="text" placeholder="Search" onClick={closeMenu} />
                                  <Button primary onClick={closeMenu}><BiSearch/></Button>
                                  </SearchContainer>
                                )
                                }
                            </MenuItemBtn>
                        <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Compare</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">About</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Reviews</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/"><BiCart/></MenuLink>
                            </MenuItem>
                          
                         
                        </Menu>
                     
                    </NavbarContainer>

                </Nav>
          
           </div>
    )
}

export default Navbar;
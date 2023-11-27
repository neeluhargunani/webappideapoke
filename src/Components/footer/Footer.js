import {
  FooterSection,
  FooterContainer,

  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  FooterCopyRight,
  FooterLinkTop,
 
  LogoImg,
  Img

} from './Footer.styles';
import FooterImage from "../../assets/FooterLogo.svg";
import { BiChat } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { Footerdata } from '../Clientdata/Data';
function Footer() {
  return (
      <div>
          <FooterSection>
              <FooterContainer>
            
                  <FooterLinkContainer>
                      <FooterLinksWrapper>
                      
                      <FooterLinks>
                      <FooterLinkTitle><LogoImg><Img src= {FooterImage}  alt="footer Logo"/></LogoImg></FooterLinkTitle>
                      <FooterLinkTop to='/'><span className='spanText'><BiPhone/></span><span className='spanText'>+1 (800) 430-8380</span></FooterLinkTop>
                      <FooterLinkTop to='/'><span className='spanText'><BiChat/></span><span>Chat now</span> </FooterLinkTop>
                      <FooterLinkTop to='/'><span className='spanText'><BiSupport/></span><span>support@puffy.com</span></FooterLinkTop>
                     
                          </FooterLinks>
                        
              
                             
                        

                      </FooterLinksWrapper>
                      {Footerdata.map((column, columnIndex) => (
              <FooterLinksWrapper key={columnIndex} >
                <FooterLinks>
                  <FooterLinkTitle>{column.title}</FooterLinkTitle>
                  {column.items.map((item, itemIndex) => (
                    <FooterLink key={itemIndex} to={item.linkDest}>
                      {item.text}
                    </FooterLink>
                  ))}
                </FooterLinks>
              </FooterLinksWrapper>
            ))}
                      <FooterLinksWrapper>
                          <FooterLinks>
                              
                          </FooterLinks>
                          <FooterLinks>
                             
                          </FooterLinks>
                          
                      </FooterLinksWrapper>
                  </FooterLinkContainer>
                  <FooterCopyRight to='https://github.com/neeluhargunani'> &copy; Copyright 2023, Designed and coded with 💛 by Neelam hargunani</FooterCopyRight>
              </FooterContainer>
          </FooterSection>
          
      </div>
  )
}
export default Footer;
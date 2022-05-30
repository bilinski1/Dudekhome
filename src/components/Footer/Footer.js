import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa" ;
import { FooterContainer, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, Logo, FooterDetails } from './FooterStyles';
import logo from '../../images/Dudekhome-footer.png'

const Footer = () => {
    return (

        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                    <Logo src={logo} alt="Logo" to="/"/>
                    </SocialLogo>
                    <FooterDetails>DUDEKHOME.COM <br/>office@dudekhome.com
                    </FooterDetails>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
                <div>B-DESIGN {new Date().getFullYear()}</div>
            </SocialMedia>

        </FooterContainer>

    )
}

export default Footer

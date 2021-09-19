import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa" ;
import { FooterContainer, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, Logo } from './FooterStyles';
import logo from '../../images/logo4min.png'

const Footer = () => {
    return (

        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                    <Logo src={logo} alt="Logo" to="/"/>
                    </SocialLogo>
                    <WebsiteRights>Bdesign {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>

    )
}

export default Footer

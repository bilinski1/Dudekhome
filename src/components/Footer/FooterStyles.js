import styled from "styled-components";
import { Link } from "gatsby";

export const FooterContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 20px auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const SocialLogo = styled(Link)`
color: black;
justify-self: center;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
`


export const WebsiteRights = styled.small`
color: black;
margin-bottom: 16px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 240px;
`

export const SocialIconLink = styled.a`
color: black;
font-size: 24px;
`

export const Logo = styled.img`
    width: auto;
    height: auto;
    margin-top: auto;
    background: #fff;

    @media screen and (max-width: 600px) {
        margin-top: auto;
        height: auto;
        width: 50%;
  }
`;
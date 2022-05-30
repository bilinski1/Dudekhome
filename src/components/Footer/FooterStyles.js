import styled from "styled-components";
import { Link } from "gatsby";

export const FooterContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

export const FooterDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
`


export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-around;
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


export const SocialIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 200px;
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
  }
`;
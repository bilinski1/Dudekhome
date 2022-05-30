import styled from "styled-components";

export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? "#0467FB" : "#E8E8E8")};
padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
color: ${({ white }) => (white ? "#fff" : "#000000")};
outline: 1px;
border: 1px;
cursor: pointer;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

&:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({ primary }) => (primary ? "#ffffff" : "#0467FB")};

}

@media screen and (max-width: 960px) {
    width: auto;
}
`
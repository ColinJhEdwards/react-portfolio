import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: white;
    font-family: "Roboto", sans-serif;
    color: black;
}

a{
    color: black;
    text-decoration: none;
    &:hover{
        text-decoration: none;
        color: gray;
    }
}


`;

export default GlobalStyle;

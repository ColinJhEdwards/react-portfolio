import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #000000;
    font-family: 'Rubik', sans-serif;
    color: white;
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

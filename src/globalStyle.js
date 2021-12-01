import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 67.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: ${(props) => props.theme.font};
        font-weight: 500;
        min-height: 100vh;
        background-color: #161932;
    }

    #root {
        width: 100vw;
        height: 100vh;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 4rem;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Kanit", sans-serif;   
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    :root {
        font-size: 22px;

        @media (min-width: 768px) {
            font-size: 18px;
        }

        @media (min-width: 1028px) {
            font-size: 16px;
        }
    }
`;

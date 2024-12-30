import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    :root {
        font-size: 22px;

        @media (min-width: 768px) {
            font-size: 18px;
        }

        @media (min-width: 1024px){
            font-size: 16px;
        }
    }
`;

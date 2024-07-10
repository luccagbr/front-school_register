import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Kanit", sans-serif;

    :root {
        font-size: 24px;

        @media (min-width: 768px) {
            font-size: 18px;
        }

        @media (min-width: 1028px) {
            font-size: 16px;
        }
    }
}
`;

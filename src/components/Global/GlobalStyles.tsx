import { css, createGlobalStyle } from "styled-components";

const globalStyles = css`
    body {
        line-height: 1.5em;
        background: #f5f5f5;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :focus {
        outline: 0;
    }
`;

export const GlobalStyles = createGlobalStyle`${globalStyles}`;

import { css, createGlobalStyle } from "styled-components";

const globalStyles = css`
    html,
    body {
        margin: 0;
        padding: 0;
    }

    body {
        line-height: 1.5em;
        background: #f5f5f5;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 300;
    }

    :focus {
        outline: 0;
    }
`;

export const GlobalStyles = createGlobalStyle`${globalStyles}`;

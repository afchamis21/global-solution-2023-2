import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        line-height: 1.3
    }

    body {
        background: ${(props) => props.theme.white};
        scroll-behavior: smooth
    }

    a {
        all: unset;
        cursor: pointer;
    }
`

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-black: #5a5a5a;
    --color-white: #FFFFFF;

    --color-gray: #eceff1;

    --color-gray--200: #f7f7f7;
    --color-gray--300: #f5f5f5;
    --color-gray--400: var(--color-gray);
    --color-gray--500: #D9D9D9;
    --color-gray--600: #c6c6c6;
    --color-gray--700: #919191;
    
    --color-blue: #44a5ff;
    --color-red: #ff4444;
    --color-orange: #ffa844;
    --color-yellow: #ffe344;
    --color-green: #40f04f;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: break-word;
    word-break: break-word;
    color: var(--color-black);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    text-decoration: none;
    color: var(--color-blue);
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
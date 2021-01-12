import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--secondary);

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  *::-webkit-scrollbar {
  display: none;
}
  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;

  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;

  
  }
  html {
    background: var(--primary)
  }
  :root {
    --primary: #1C1C1C;
    --secondary: rgba(255,255,255,0.6);
  }
`;

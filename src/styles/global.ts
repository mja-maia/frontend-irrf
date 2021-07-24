import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    background-color: #F7F7F9;
  }

  body{
    font-size: 16px;
    font-weight: 300;
    color: #574D55;

    text-rendering: optimizeLegibility !important;
    -webkit-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    button{
      cursor: pointer;
      outline:none;
    }
  }

  .content{
    min-width: 100%;
    height: calc(100% - 100px);

    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyles;

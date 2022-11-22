import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    
    --color-backgroud: #fff;
    --color-text: #fff;
    --color-buttonsContainer: #A8A8A8;
    --color-buttons:#102542;
    --color-colorIcons: #fff;
    --color-tertiary: #102542;
    --color-border: #dbdbdb;

    --radius-border:5px
  }
  * h1{
    font-size: 20px;
    color: #501a28;
    font-family: 'Poppins';
    margin-bottom: -5px;
  }
  * h2, h3{
     color: #fff;
  }
  * contactFonts{
    font-size: 10px;
    font-family: 'Poppins';
    font-weight: bold;
  }

  *bottom{
    cursor: pointer;
  }
  body{
    background: #E2E2E2;

  }
`
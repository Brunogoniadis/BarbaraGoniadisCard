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
    color: #fff;
    font-family: 'Poppins';
    margin-bottom: -5px;
  }
  * h2, h3{
     color: #fff;
  }
  *bottom{
    cursor: pointer;
  }
  body{
    background: linear-gradient(0deg, #421034 0%, #8A296F 50.31%, #421034 100%);

  }
`
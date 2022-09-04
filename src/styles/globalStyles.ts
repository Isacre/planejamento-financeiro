import { createGlobalStyle } from "styled-components";
import Lato from '../assets/Lato-Regular.ttf';


const GlobalStyle = createGlobalStyle`

@font-face {
    font-family:Lato;
    src: url(${Lato});
}



:root {
  --color-main: #ff007f;
  --color-background: #f9f9f9;
  --font-lato: Lato;
  --dropshadow-pink: drop-shadow(1px 1px 0px rgba(255, 0, 127, 0.5));
  --fontsize-title: 25px;
  --fontsize-subtitle: 20px;
  --fontsize-text: 16px;

}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'sans-serif';
    background-color: transparent;

   


    a{ 
        text-decoration: none;
        color: inherit
    }
}
`;


export default GlobalStyle;
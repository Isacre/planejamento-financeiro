import { createGlobalStyle } from "styled-components";
import Lato from '../assets/Lato-Regular.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family:Lato;
    src: url(${Lato});
}

:root {
  --color-pink: #ff007f;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:Lato;

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  
}
    
    
   

    a{ 
        text-decoration: none;
        color: inherit
    }
}
`;


export default GlobalStyle;
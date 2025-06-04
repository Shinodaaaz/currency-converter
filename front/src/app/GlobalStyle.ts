import { createGlobalStyle } from 'styled-components'
import {mixins} from "@/shared/theme/mixins.ts";
import {colors} from "@/shared/theme/colors.ts";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.dark};
    color: ${colors.text};
  }
  
  h1 {
    ${mixins.textH1};
  }
  
  h2 {
    ${mixins.textH2}
  }
  
  h3 {
    ${mixins.textH3}
  }
  
  h4 {
    ${mixins.textH4}
  }
  
  h5 {
    ${mixins.textH5}
  }
  
  h6 {
    ${mixins.textH6}
  }
  
  p {
    ${mixins.textP}
  }
  
  span {
    ${mixins.textSpan}
  }
`

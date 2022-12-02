import { createGlobalStyle } from 'styled-components'
import { backgroundColor, textColor } from '../constants/ui'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: ${backgroundColor};
    color: ${textColor};
    font-family: Inter, sans-serif;
  }
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

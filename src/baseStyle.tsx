import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const BaseStyle = createGlobalStyle`
  ${reset}
  body, html {
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 14px !important;
  }
  * {
    box-sizing: border-box;
  }
  p {
    margin-bottom: 0.75rem;
  }
  a {
    text-decoration: unset;
    color: unset;
  }
  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export const theme = {
  colors: {
    darkBlue: '#06092B',
    pink: '#F231A5'
  }
}
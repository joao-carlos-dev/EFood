import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  orange: '#E66767',
  lightOrange: '#FFEBD9',
  bottomColor: '#FFF8F2'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.orange};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#FFFFFF',
  laranja: '#E66767',
  laranjaClaro: '#FFEBD9'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.laranja};
  }
`

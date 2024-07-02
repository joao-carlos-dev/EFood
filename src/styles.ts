import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
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
    list-style: none;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.laranja};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

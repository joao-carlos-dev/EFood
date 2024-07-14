import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-bottom: 32px;
  max-width: 320px;

  img {
    width: 304px;
    width: 100%;
    padding: 8px;
  }

  ${ButtonContainer} {
    margin: 8px;
    background-color: ${cores.laranjaClaro};
    width: 95%;
    box-sizing: border-box;
    cursor: pointer;

    a {
      color: ${cores.laranja};
    }
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 8px;
  color: ${cores.laranjaClaro};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.laranjaClaro};
  display: block;
  margin-bottom: 16px;
  padding: 8px;
`

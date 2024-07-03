import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branco};

  img {
    margin-bottom: -10px;
  }

  div {
    border: 0px, 1px, 1px, 1px;
    border-style: solid;
    border-color: ${cores.laranja};
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonContainer} {
    margin-bottom: 8px;
    margin-left: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  padding: 8px;
`
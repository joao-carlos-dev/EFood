import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  margin-bottom: 48px;

  img {
    margin-bottom: -4px;
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${ButtonContainer} {
    margin-bottom: 8px;
    margin-left: 8px;

    a {
      color: ${cores.branco};
    }
  }
`

export const Border = styled.div`
  border: 1px;
  border-style: solid;
  border-color: ${cores.laranja};
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 8px;
  display: flex;
  justify-content: space-between;
`
export const Nota = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 21px;
  }
`

export const Avaliacao = styled.h4`
  margin-right: 8px;
  font-size: 18px;
  font-weight: 700;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  padding: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

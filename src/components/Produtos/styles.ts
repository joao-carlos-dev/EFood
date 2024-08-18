import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-bottom: 32px;
  max-width: 320px;

  img {
    width: 304px;
    height: 167px;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  max-height: 344px;
  display: flex;
  position: relative;
  z-index: 1;
  background-color: ${cores.laranja};

  div {
    img {
      margin: 8px;
      cursor: pointer;
    }
  }

  button {
    display: block;
  }

  > img {
    width: 280px;
    height: 280px;
    margin: 32px;
  }
`

export const InfosPrato = styled.div`
  display: block;
  margin-left: 24px;
`

export const NomePrato = styled.h4`
  color: ${cores.branco};
  font-size: 18px;
  font-weight: 900;
  align: center;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Prato = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const BotaoModel = styled.button`
  background-color: ${cores.laranjaClaro};
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: 218px;
  height: 24px;
  border: none;
`

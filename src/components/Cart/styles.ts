import styled from 'styled-components'
import { cores } from '../../styles'
import { BotaoModel } from '../Produtos/styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${BotaoModel} {
    max-width: 100%;
    width: 100%;
  }
`
export const PricesTotal = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.laranjaClaro};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const PricesPrato = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.laranja};
  margin-top: 16px;
  margin-bottom: 32px;
`

export const NomePrato = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.laranja};
  margin-top: 8px;
`

export const CarItem = styled.li`
  display: flex;
  background-color: ${cores.laranjaClaro};
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`

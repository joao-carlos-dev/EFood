import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonModel } from '../Produtos/styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import iconClose from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  overflow: hidden;
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
  background-color: ${colors.orange};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  max-height: 1624px;
  height: 100%;
  width: 100%;

  ${ButtonModel} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.lightOrange};
    text-align: center;
  }
`
export const PricesTotal = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.lightOrange};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const PricesDish = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.orange};
  margin-top: 16px;
`

export const NameDish = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.orange};
  margin-top: 8px;
`

export const CarItem = styled.li`
  display: flex;
  background-color: ${colors.lightOrange};
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
    cursor: pointer;
  }
`

export const ButtonCart = styled.button`
  background-color: ${colors.lightOrange};
  color: ${colors.orange};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: 218px;
  width: 100%;
  height: 24px;
  border: none;
  cursor: pointer;
`

import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  a {
    color: ${colors.orange};
    text-decoration: none;
    font-weight: 900;
  }
`

export const Links = styled.ul`
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 15px;
  }
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 15px;
  }

  img {
    height: 20px;
    margin-left: 8px;
  }
`

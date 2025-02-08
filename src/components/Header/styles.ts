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

  @media (max-width: ${breakpoints.phone}) {
    h1 img {
      width: 80px;
    }
  }
`

export const Links = styled.ul`
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 15px;
  }

  @media (max-width: ${breakpoints.phone}) {
    margin-left: 10px;
  }
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 15px;
  }

  @media (max-width: ${breakpoints.phone}) {
    margin-right: 10px;
  }

  img {
    height: 20px;
    margin-left: 8px;
  }
`

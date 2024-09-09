import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  a {
    color: ${cores.laranja};
    text-decoration: none;
    font-weight: 900;
  }
`

export const Links = styled.ul`
  display: flex;
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    height: 20px;
    margin-left: 8px;
  }
`

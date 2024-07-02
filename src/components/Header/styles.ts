import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 186px;
  padding: 83px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.laranja};
    text-decoration: none;
    font-weight: 900;
  }
`

export const Links = styled.ul`
  display: flex;
`

export const LinkCarrinho = styled.a`
  display: flex;

  img {
    margin-left: 16px;
    height: 20px;
  }
`

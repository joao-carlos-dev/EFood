import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.lightOrange};
  padding: 32px 0;
  text-align: center;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
`

export const LinkSocial = styled.a`
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-top: 32px;
`

export const TextFooter = styled.p`
  font-size: 10px;
  font-weight: 400;
`

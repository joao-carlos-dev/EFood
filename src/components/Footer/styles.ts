import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.laranjaClaro};
  padding: 32px 0;
  text-align: center;
`

export const LogoFooter = styled.img`
  width: 125px;
  margin-top: 40px;
  margin-bottom: 32px;
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

export const TextoFooter = styled.p`
  font-size: 10px;
  font-weight: 400;
`

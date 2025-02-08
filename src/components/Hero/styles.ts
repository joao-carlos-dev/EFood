import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Header = styled.div`
  widht: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Soon = styled.img`
  width: 125px;
  margin-top: 40px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  width: 539px;
  margin-top: 136px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    line-height: 32px;
    width: 428px;
  }
`

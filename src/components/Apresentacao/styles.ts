import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  font-size: 32px;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 32px;
  color: ${colors.white};
`

export const typeOfFood = styled.h4`
  font-weight: 100;
  color: ${colors.white};
  padding-top: 24px;
  margin-bottom: 156px;
  text-transform: capitalize;
`

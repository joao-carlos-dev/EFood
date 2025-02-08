import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  padding: 56px 0;
  background-color: ${colors.bottomColor};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 18px;
    row-gap: 18px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

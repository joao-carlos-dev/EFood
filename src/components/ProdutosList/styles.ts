import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 56px 0;
  background-color: ${cores.corFundo};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`

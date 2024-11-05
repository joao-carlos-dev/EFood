import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-decoration: none;
`

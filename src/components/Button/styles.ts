import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
`
// align-items: flex-end;

export const ButtonLink = styled(Link)`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-decoration: none;
`

import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 360px;
  padding: 32px 8px 0 8px;
  background-color: ${colors.orange};
  z-index: 2;

  h2 {
    color: ${colors.lightOrange};
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    color: ${colors.lightOrange};
    text-align: justify;
  }

  .margin-top {
    margin-top: 24px;
  }
`

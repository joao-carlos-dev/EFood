import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${cores.laranja};

  h2 {
    color: ${cores.laranjaClaro};
    margin-top: 32px;
    margin-bottom: 16px;
    font-weight: 16px;
    font-weight: 700;
  }

  small {
    color: ${cores.laranjaClaro};
  }

  .margin-top {
    margin-top: 24px;
  }
`

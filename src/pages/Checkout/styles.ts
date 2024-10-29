import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.laranjaClaro};
    display: block;
    margin: 8px 0;
  }

  input {
    background-color: ${cores.laranjaClaro};
    border: 1px solid ${cores.laranjaClaro};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
export const InputCepNumber = styled.div`
  label {
  }

  input {
    display: block;
  }
`

export const BotaoCard = styled.button`
  background-color: ${cores.laranjaClaro};
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: 218px;
  width: 100%;
  margin-bottom: 8px;
  height: 24px;
  border: none;
  cursor: pointer;
`

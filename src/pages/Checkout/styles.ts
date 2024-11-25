import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  columnGap?: string
}

export const EncapsuladorCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
`

export const Row = styled.div<RowProps>`
  column-gap: ${(props) => props.columnGap || '34px'};
  display: flex;
  align-items: flex-end;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.lightOrange};
    display: block;
    margin: 8px 0;
  }

  input {
    background-color: ${colors.lightOrange};
    border: 1px solid ${colors.lightOrange};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    outline: none;

    &.error {
      border: 2px solid red;
    }
  }
`
export const InputCepNumber = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.lightOrange};
    display: block;
    margin: 8px 0;
  }

  input {
    background-color: ${colors.lightOrange};
    border: 1px solid ${colors.lightOrange};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    outline: none;

    &.error {
      border: 2px solid red;
    }
  }
`

export const ButtonCard = styled.button`
  background-color: ${colors.lightOrange};
  color: ${colors.orange};
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

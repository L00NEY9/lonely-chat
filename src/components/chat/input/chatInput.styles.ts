import styled from 'styled-components'
import { borderColor, borderRadius } from '../../../constants/ui'

export const ChatInputWrapper = styled.form`
  width: 100%;
  min-height: 50px;
  border-top: 1px solid ${borderColor};
  display: flex;
  align-items: end;
`

export const ChatInputTextField = styled.input`
  font-family: Inter, sans-serif;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${borderColor};
  border-radius: ${borderRadius}px;
  outline-width: 2px;
`

export const ChatInputSendButton = styled.button`
  padding: 10px 15px;
  margin-left: 10px;
  border: 1px solid ${borderColor};
  border-radius: ${borderRadius}px;
  cursor: pointer;
`

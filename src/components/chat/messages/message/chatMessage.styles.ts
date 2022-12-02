import styled from 'styled-components'
import { borderRadius, backgroundColor } from '../../../../constants/ui'

interface ChatMessageWrapperProps {
  byCurrentUser: boolean
}

export const ChatMessageWrapper = styled.div<ChatMessageWrapperProps>`
  width: fit-content;
  background: ${backgroundColor};
  padding: 5px 15px;
  border-radius: ${borderRadius}px;
  margin-bottom: 15px;
  margin-left: ${props => props.byCurrentUser ? 'auto' : 'unset'};
`

export const ChatMessageHeader = styled.header`
  font-size: 13px;
`

export const ChatMessageContent = styled.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
`

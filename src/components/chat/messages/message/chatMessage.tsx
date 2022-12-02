import React, { memo } from 'react'
import { ChatMessage as ChatMessageInterface } from '../../../../models/message.model'
import { ChatMessageContent, ChatMessageHeader, ChatMessageWrapper } from './chatMessage.styles'
import { useAppSelector } from '../../../../hooks/selector.hook'

const ChatMessage: React.FC<ChatMessageInterface> = ({ content, from, timestamp }) => {
  const currentUser = useAppSelector(state => state.users.currentUser)

  return (
    <ChatMessageWrapper
      byCurrentUser={from.id === currentUser?.id}
    >
      <ChatMessageHeader>
        <b>
          {
            from.username
          }
        </b>
        &nbsp;
        {
          new Date(timestamp).toLocaleTimeString()
        }
      </ChatMessageHeader>
      <ChatMessageContent>
        {
          content
        }
      </ChatMessageContent>
    </ChatMessageWrapper>
  )
}

export default memo(ChatMessage)

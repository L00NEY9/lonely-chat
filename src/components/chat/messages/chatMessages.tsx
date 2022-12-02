import React, { useEffect, useRef } from 'react'
import { ChatMessagesWrapper } from './chatMessages.styles'
import { useAppSelector } from '../../../hooks/selector.hook'
import ChatMessage from './message/chatMessage'

const ChatMessages: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const messages = useAppSelector(state => state.chat.messages)

  useEffect(() => {
    if (!wrapperRef.current) return
    wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight
  }, [messages])

  return (
    <ChatMessagesWrapper
      ref={wrapperRef}
    >
      {
        messages.map(message => <ChatMessage key={message.id} {...message}/>)
      }
    </ChatMessagesWrapper>
  )
}

export default ChatMessages

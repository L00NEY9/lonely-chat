import React from 'react'
import { ChatWrapper } from './chat.styles'
import ChatHeader from './header/chatHeader'
import ChatMessages from './messages/chatMessages'
import ChatInput from './input/chatInput'

const Chat: React.FC = () => {
  return (
    <ChatWrapper>
      <ChatHeader/>
      <ChatMessages/>
      <ChatInput/>
    </ChatWrapper>
  )
}

export default Chat

import React from 'react'
import { ChatHeaderWrapper } from './chatHeader.styles'
import { useAppSelector } from '../../../hooks/selector.hook'

const ChatHeader: React.FC = () => {
  const users = useAppSelector(state => state.users.users)
  const currentUser = useAppSelector(state => state.users.currentUser)!

  return (
    <ChatHeaderWrapper>
      <h4>Lonely Chat</h4>
      <span>
        {
          currentUser?.username
        }
        &nbsp;
        {
          users.length > 0 && <>and {users.length} more user{users.length > 1 && 's'}</>
        }
      </span>
    </ChatHeaderWrapper>
  )
}

export default ChatHeader

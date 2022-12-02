import React, { FormEventHandler, useCallback, useRef } from 'react'
import { ChatInputSendButton, ChatInputTextField, ChatInputWrapper } from './chatInput.styles'
import { chatService } from '../../../services'

const ChatInput: React.FC = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)

  const onChatInputFormSubmit = useCallback<FormEventHandler>((ev) => {
    ev.preventDefault()
    if (!textFieldRef.current) return
    const content = textFieldRef.current.value
    if (!content) return
    chatService.sendMessage(content)
    textFieldRef.current.value = ''
  }, [])

  return (
    <ChatInputWrapper
      onSubmit={onChatInputFormSubmit}
    >
      <ChatInputTextField
        ref={textFieldRef}
        placeholder={'Enter your message'}
      />
      <ChatInputSendButton type={'submit'}>
        Send
      </ChatInputSendButton>
    </ChatInputWrapper>
  )
}

export default ChatInput

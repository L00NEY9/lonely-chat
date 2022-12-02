import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatMessage } from '../../models/message.model'

interface ChatState {
  messages: ChatMessage[]
}

const initialState: ChatState = {
  messages: []
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages (state, action: PayloadAction<ChatMessage[]>) {
      state.messages = action.payload
    },
    addMessage (state, action: PayloadAction<ChatMessage>) {
      state.messages.push(action.payload)
    }
  }
})

export const {
  setMessages,
  addMessage
} = chatSlice.actions

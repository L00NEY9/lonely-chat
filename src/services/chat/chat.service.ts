import { store } from '../../store'
import { ChatMessage } from '../../models/message.model'
import { addMessage, setMessages } from '../../store/slices/chat.slice'
import { ChatBroadcastChannelController } from './chat.broadcastChannelController'
import { v4 as uuid4 } from 'uuid'

export class ChatService {
  public readonly broadcastChannel: ChatBroadcastChannelController

  constructor () {
    this.broadcastChannel = new ChatBroadcastChannelController()
    const storedMessages = this.loadStoredMessages()
    store.dispatch(setMessages(storedMessages))
  }

  private loadStoredMessages (): ChatMessage[] {
    try {
      const storedMessages = window.localStorage.getItem('messages')
      if (storedMessages === null) return []
      return JSON.parse(storedMessages)
    } catch (e) {
      return []
    }
  }

  public storeMessage (message: ChatMessage): void {
    const storedMessages = this.loadStoredMessages()
    storedMessages.push(message)
    window.localStorage.setItem('messages', JSON.stringify(storedMessages))
  }

  public sendMessage (messageContent: string): void {
    const currentUser = store.getState().users.currentUser
    if (!currentUser) return
    const message: ChatMessage = {
      id: uuid4(),
      content: messageContent,
      from: currentUser,
      timestamp: Date.now()
    }
    store.dispatch(addMessage(message))
    this.broadcastChannel.emit<ChatMessage>('newMessage', message)
    this.storeMessage(message)
  }
}

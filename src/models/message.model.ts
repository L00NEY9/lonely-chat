import { User } from './user.model'

export interface ChatMessage {
  id: string
  content: string
  from: User
  timestamp: number
}

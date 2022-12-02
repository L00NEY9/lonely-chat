import { BroadcastChannelActionHandler, BroadcastChannelController } from '../../utils/broadcastChannelController'
import { ChatMessage } from '../../models/message.model'
import { store } from '../../store'
import { addMessage } from '../../store/slices/chat.slice'

interface ActionHandlersMap {
  newMessage: BroadcastChannelActionHandler<ChatMessage>
}

export class ChatBroadcastChannelController extends BroadcastChannelController<ActionHandlersMap> {
  static readonly channelName = 'chat-broadcast-channel'

  constructor () {
    super(ChatBroadcastChannelController.channelName, {
      newMessage (event, message) {
        store.dispatch(addMessage(message))
      }
    })
  }
}

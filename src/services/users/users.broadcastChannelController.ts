import { BroadcastChannelActionHandler, BroadcastChannelController } from '../../utils/broadcastChannelController'
import { User } from '../../models/user.model'
import { usersService } from '../index'

interface ActionHandlersMap {
  declareUser: BroadcastChannelActionHandler<User>
  userDisconnected: BroadcastChannelActionHandler<User>
}

export class UsersBroadcastChannelController extends BroadcastChannelController<ActionHandlersMap> {
  static readonly channelName = 'users-broadcast-channel'

  constructor () {
    super(UsersBroadcastChannelController.channelName, {
      declareUser (event, user) {
        usersService.addUser(user)
      },
      userDisconnected (event, user) {
        usersService.removeUser(user)
      }
    })
  }
}

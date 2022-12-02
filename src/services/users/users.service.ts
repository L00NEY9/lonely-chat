import { User } from '../../models/user.model'
import { UsersBroadcastChannelController } from './users.broadcastChannelController'
import validator from 'validator'
import { store } from '../../store'
import { addUser, removeUser, setCurrentUser } from '../../store/slices/users.slice'
import { v4 as uuid4 } from 'uuid'

export class UsersService {
  public broadcastChannel: UsersBroadcastChannelController

  constructor () {
    this.broadcastChannel = new UsersBroadcastChannelController() // init broadcast channel

    const askUsername = (): string => {
      const username = prompt('To continue, enter your name, which contains more than 3 and less than 30 characters')
      if (username == null || !validator.isLength(username, { min: 3, max: 30 })) return askUsername()
      return username
    }
    const currentUser: User = {
      id: uuid4(),
      username: askUsername()
    }

    store.dispatch(setCurrentUser(currentUser))
    this.broadcastChannel.emit<User>('declareUser', currentUser) // declare user for all peers
    window.addEventListener('unload', () => {
      this.broadcastChannel.emit('userDisconnected', currentUser)
    })
  }

  public addUser (newUser: User): void {
    const usersState = store.getState().users
    if (!usersState.currentUser) return // if current user not initialized yet
    if (usersState.users.some(user => user.id === newUser.id)) return // if peer already exists
    store.dispatch(addUser(newUser))
    this.broadcastChannel.emit<User>('declareUser', usersState.currentUser) // because one more peer connected, we need to declare us to him
  }

  public removeUser (user: User): void {
    store.dispatch(removeUser(user.username))
  }
}

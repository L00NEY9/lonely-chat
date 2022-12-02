import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../models/user.model'

interface UsersState {
  users: User[]
  currentUser?: User
}

const initialState: UsersState = {
  users: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser (state, action: PayloadAction<User>) {
      state.users.push(action.payload)
    },
    removeUser (state, action: PayloadAction<string>) {
      state.users = state.users.filter(user => user.username !== action.payload)
    },
    setCurrentUser (state, action: PayloadAction<User>) {
      state.currentUser = action.payload
    }
  }
})

export const {
  addUser,
  removeUser,
  setCurrentUser
} = usersSlice.actions

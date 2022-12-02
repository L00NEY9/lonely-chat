import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { chatSlice } from './slices/chat.slice'
import { usersSlice } from './slices/users.slice'

export const rootReducer = combineReducers({
  chat: chatSlice.reducer,
  users: usersSlice.reducer
})

export const store = configureStore({
  devTools: true,
  reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']

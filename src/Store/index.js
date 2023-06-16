import { configureStore } from '@reduxjs/toolkit'
import users from './UsersSlice'
import newUser from './NewUserSlice'

export const store = configureStore({
  reducer: {
    users,
    newUser,
  },
})

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allUsers: [],
  page: 1,
  loading: false,
  activeBtn: false,
  error: false,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      const sortedUsers = action.payload.sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp,
      )
      sortedUsers.map((el) => state.allUsers.push(el))
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    toggleActiveBtn: (state) => {
      state.activeBtn = true
    },
    setError: (state) => {
      state.error = true
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    updateUsers: (state, action) => {
      state.allUsers = action.payload
    },
  },
})

export const {
  setUsers,
  setPage,
  toggleActiveBtn,
  setError,
  setLoading,
  updateUsers,
} = usersSlice.actions

export default usersSlice.reducer

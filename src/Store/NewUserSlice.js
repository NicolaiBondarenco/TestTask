import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  phone: '',
  position_id: null,
  photo: null,
}

export const newUserSlice = createSlice({
  name: 'newUser',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setPositionId: (state, action) => {
      state.position_id = action.payload
    },
    setPhoto: (state, action) => {
      state.photo = action.payload
    },
  },
})

export const {
  setName,
  setEmail,
  setPhone,
  setPositionId,
  setPhoto,
} = newUserSlice.actions

export default newUserSlice.reducer

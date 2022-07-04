import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const reducers = {
  addItemToCart: function(state, action) {
    const existing = state.items.find(({ id }) => id === action.payload.id)

    if (existing) {
      existing.amount++
    } else {
      state.items.push(action.payload)
    }
  },
  removeItemFromCart: function(state, action) {
    state.items = state.items.filter(({ id }) => id !== action.payload.id) 
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers,
})

export const {
  addItemToCart,
  removeItemFromCart
} = cartSlice.actions

export default cartSlice.reducer
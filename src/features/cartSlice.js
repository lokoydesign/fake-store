import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const reducers = {
  addItemToCart: function(state, action) {
    const existing = state.items.find(({ id }) => id === action.payload.id)

    if (existing) {
      existing.amount += action.payload.amount
    } else {
      state.items.push(action.payload)
    }
  },

  removeItemFromCart: function(state, action) {
    state.items = state.items.filter(({ id }) => id !== action.payload)
  },

  addToItemAmount: function(state, action) {
    const item = state.items.find(({ id }) => id === action.payload.id)

    if (item)
      item.amount += action.payload.amount
  },

  subtractFromItemAmount: function(state, action) {
    const item = state.items.find(({ id }) => id === action.payload.id)

    if (item)
      item.amount -= action.payload.amount
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers,
})

export const {
  addItemToCart,
  removeItemFromCart,
  addToItemAmount,
  subtractFromItemAmount
} = cartSlice.actions

export default cartSlice.reducer
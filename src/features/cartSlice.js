import { createSlice } from '@reduxjs/toolkit'

export const taxPercentage = .25

export const shippingOptions = [
  {id: 'postoffice', name: 'Your local post office', price: 49.99},
  {id: 'pickup', name: 'Your nearest pickup point', price: 21.50},
  {id: 'door', name: 'Right to your door', price: 99.99},
]

export const paymentOptions = [
  {id: 'visamastercard', name: 'Visa or master card'},
  {id: 'paylater', name: 'Pay later'},
]

const initialState = {
  items: [],
  shipping: shippingOptions[0],
  payment: paymentOptions[0],
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
  },

  setShippingOption: function(state, action) {
    state.shipping = action.payload
  },

  setPaymentOption: function(state, action) {
    state.payment = action.payload
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
  subtractFromItemAmount,
  setShippingOption,
  setPaymentOption,
} = cartSlice.actions

export default cartSlice.reducer
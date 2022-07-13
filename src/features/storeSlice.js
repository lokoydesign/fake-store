import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: []
}

const reducers = {
  setCategories: function(state, action) {
    state.categories = action.payload
  }
}

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers,
})

export const {
  setCategories
} = storeSlice.actions

export default storeSlice.reducer
import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cartSlice'
import storeReducer from './features/storeSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    store: storeReducer,
  }
})
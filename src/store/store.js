import { configureStore } from '@reduxjs/toolkit'
import products from './products/slice'
import bag from './bag/slice'

export const store = configureStore({
  reducer: {
    products,
    bag,
  },
})

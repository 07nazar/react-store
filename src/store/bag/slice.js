import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productsInBag: [],
  totalOrder: 0,
}

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItemToBag(state, action) {
      const product = { ...action.payload }
      state.productsInBag.push(product)
      localStorage.setItem('bag', JSON.stringify(state.productsInBag))
    },
    removeFromBag(state, action) {
      const productsWithOut = state.productsInBag.filter(item => item.id !== action.payload.id)
      state.productsInBag = productsWithOut
      localStorage.setItem('bag', JSON.stringify(state.productsInBag))
    },
    increaseCount(state, action) {
      state.productsInBag.find(item => item.id === action.payload).count += 1
    },
    decreaseCount(state, action) {
      const product = state.productsInBag.find(item => item.id === action.payload)
      if (product.count > 1) {
        product.count -= 1
      } else {
        state.productsInBag = state.productsInBag.filter(item => item.id !== action.payload)
      }
    },
  },
})

export const { addItemToBag, removeFromBag, increaseCount, decreaseCount } = bagSlice.actions

export default bagSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { getBagItems, getTotalSum, setItemToLS } from '../../utils/helpers'

const initialState = {
  productsInBag: getBagItems(),
  totalOrder: getTotalSum(),
}

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addProductToBag(state, action) {
      state.productsInBag.push({ ...action.payload, count: 1 })
      setItemToLS(state.productsInBag, 'bag')
    },

    removeProductFromBag(state, action) {
      state.productsInBag = state.productsInBag.filter(item => item.id !== action.payload.id)
      setItemToLS(state.productsInBag, 'bag')
    },

    setProductCount(state, action) {
      const { count, id } = action.payload
      if (count < 1) {
        const products = state.productsInBag.filter(item => item.id !== id)
        state.productsInBag = products
      }
      if (count >= 1) {
        const product = state.productsInBag.find(item => item.id === id)
        product.count = count
      }
      setItemToLS(state.productsInBag, 'bag')
    },

    setTotalOrder(state) {
      state.totalOrder = getTotalSum()
    },
  },
})

export const { addProductToBag, removeProductFromBag, setProductCount, setTotalOrder } =
  bagSlice.actions

export default bagSlice.reducer

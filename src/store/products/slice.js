import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './asyncActions'
import { setItemToLS, getHomeItems } from '../../utils/helpers'

const initialState = {
  products: getHomeItems(),
  status: null,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    foundedProducts(state, action) {
      state.products = state.products.filter(item =>
        item.title.toLowerCase().includes(action.payload.text.toLowerCase()),
      )
    },
    changeSelectedStatus(state, action) {
      const product = state.products.find(item => item.id === action.payload.id)
      product.selected = action.payload.selected
      setItemToLS(state.products, 'products')
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.status = 'LOADING'
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'FULFILLED'
      state.error = null
      state.products = action.payload
      setItemToLS(action.payload, 'products')
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'REJECTED'
      state.error = action.payload
    })
  },
})

export const { foundedProducts, changeSelectedStatus } = productsSlice.actions

export default productsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './asyncActions'

const initialState = {
  products: [],
  status: null,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeSelectedStatus(state, action) {
      const product = state.products.find(item => item.id === action.payload.id)
      product.selected = action.payload.selected
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.status = 'LOADING'
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'FULFILLED'
      state.products = action.payload
      state.error = null
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'REJECTED'
      state.error = action.payload
    })
  },
})

export const { changeSelectedStatus } = productsSlice.actions

export default productsSlice.reducer

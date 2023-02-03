// import { createSlice } from '@reduxjs/toolkit'
// import { fetchProducts } from './asyncActions'

// const initialState = {
//   items: [],
//   status: null,
//   error: null,
// }

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(fetchProducts.pending, state => {
//       state.status = 'LOADING'
//     })
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.status = 'FULFILLED'
//       state.error = null
//       state.items = action.payload
//     })
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       state.status = 'REJECTED'
//       state.error = action.payload
//     })
//   },
// })

// export const { searchByTitle } = productsSlice.actions

// export default productsSlice.reducer

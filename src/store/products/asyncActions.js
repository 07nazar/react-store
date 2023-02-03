// import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async ({ sortBy, searchValue }, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `https://63d735865c4274b136f04454.mockapi.io/products?${sortBy}=${searchValue}`,
//       )
//       const data = await response.json()

//       return data
//     } catch (error) {
//       return rejectWithValue(error.message)
//     }
//   },
// )

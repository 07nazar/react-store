import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://63d735865c4274b136f04454.mockapi.io/products`)
      const data = await response.json()

      return data.map(item => ({ ...item, selected: false }))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

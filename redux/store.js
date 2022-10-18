import { configureStore } from '@reduxjs/toolkit'
import articleSlice from './slices/articleSlice'
import filterSlice from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    articleSlice,
    filterSlice,
  },
})
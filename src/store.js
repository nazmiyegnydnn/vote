import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,// Burasını kendimizin slice dosyasına göre değiştiriyoruz.
  },
})  

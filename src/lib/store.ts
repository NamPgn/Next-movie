import { configureStore } from '@reduxjs/toolkit'
import category from './features/categorys/category'

export const makeStore = () => {
  return configureStore({
    reducer: {
        category:category
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
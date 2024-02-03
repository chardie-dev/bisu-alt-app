import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { signupReducer } from './signupSlice'

export const rootReducer = combineReducers({
  signupData: signupReducer
})

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
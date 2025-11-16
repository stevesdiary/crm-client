import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Temporary dummy reducer to fix the error
    app: (state = {}, action: any) => state,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
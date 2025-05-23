import { productApi } from '@/services/productApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // Example: products: productApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
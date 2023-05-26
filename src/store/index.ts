import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/slice';

export const appStore = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

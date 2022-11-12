import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

export type ProductsState = {
  value: Product[];
};

const initialState: ProductsState = {
  value: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeProducts: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    },
  },
});

export const { changeProducts } = productsSlice.actions;

export default productsSlice.reducer;

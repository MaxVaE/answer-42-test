import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

export interface ProductsState {
  list: Product[];
  selectedProductId: number;
  insertedMoney: number;
}

const initialState: ProductsState = {
  list: [],
  selectedProductId: 0,
  insertedMoney: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: ProductsState, action: PayloadAction<Product[]>) => {
      state.list = action.payload;
    },
    setSelectedProductId: (state: ProductsState, action: PayloadAction<number>) => {
      state.selectedProductId = action.payload;
    },
    setInsertedMoney: (state: ProductsState, action: PayloadAction<number>) => {
      state.insertedMoney = action.payload;
    },
    addInsertedMoney: (state: ProductsState, action: PayloadAction<number>) => {
      state.insertedMoney += action.payload;
    },
  },
});

export const {
  setProducts,
  setSelectedProductId,
  setInsertedMoney,
  addInsertedMoney,
} = productsSlice.actions;

export default productsSlice.reducer;

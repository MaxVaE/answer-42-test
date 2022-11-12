import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

export type ProductsState = {
  list: Product[];
  choosenProductId: number;
  insertedMoney: number;
};

const initialState: ProductsState = {
  list: [],
  choosenProductId: 0,
  insertedMoney: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.list = action.payload;
    },
    setChoosenProductId: (state, action: PayloadAction<number>) => {
      state.choosenProductId = action.payload;
    },
    setInsertedMoney: (state, action: PayloadAction<number>) => {
      state.insertedMoney = action.payload;
    },
    addInsertedMoney: (state, action: PayloadAction<number>) => {
      state.insertedMoney += action.payload;
    },
  },
});

export const {
  setProducts, setChoosenProductId, setInsertedMoney, addInsertedMoney,
} = productsSlice.actions;

export default productsSlice.reducer;

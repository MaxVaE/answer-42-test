import { RootState } from '..';

export const selectProducts = (state: RootState) => state.products;
export const selectProductById = (state: RootState) => state.products.list.find(({ id }) => id === state.products.selectedProductId);

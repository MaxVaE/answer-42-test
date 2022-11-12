import { RootState } from '..';

export const getProductById = (state: RootState, productId: number) => state.products.list.find(({ id }) => id === productId);

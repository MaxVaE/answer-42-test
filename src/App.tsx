import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './api/getProducts';
import { Dashboard } from './components/Dashboard';
import { Display } from './components/Display';
import { setProducts } from './store/products/slice';

export const App = () => {
  const dispatch = useDispatch();

  const mountApp = async () => {
    const products = await getProducts();
    dispatch(setProducts(products));
  };

  useEffect(() => {
    mountApp();
  }, []);

  return (
    <div className="app">
      <Display />

      <Dashboard />
    </div>
  );
};

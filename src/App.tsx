import { useEffect } from 'react';
import { fetchGetProducts } from './common/fetchs/productFetchs';
import Dashboard from './components/Dashboard/Dashboard';
import Display from './components/Display/Display';
import { useAppDispatch } from './store/hooks';
import { changeProducts } from './store/reducers/productsSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function mountApp() {
      const data = fetchGetProducts();
      dispatch(changeProducts(data));
    }

    mountApp();
  }, []);

  return (
    <div className="app">
      <Display />

      <Dashboard />
    </div>
  );
}

export default App;

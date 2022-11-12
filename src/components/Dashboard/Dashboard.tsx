import { useAppDispatch } from '../../store/hooks';
import { setChoosenProductId, addInsertedMoney } from '../../store/reducers/productsSlice';
import MoneyReceiver from '../MoneyReceiver/MoneyReceiver';
import ChooseProduct from '../ChooseProduct/ChooseProduct';

function Dashboard() {
  const dispatch = useAppDispatch();

  return (
    <section className="dashboard">
      <MoneyReceiver handleSubmit={(money) => dispatch(addInsertedMoney(money))} />

      <ChooseProduct handleSubmmit={(productId) => dispatch(setChoosenProductId(productId))} />
    </section>
  );
}

export default Dashboard;

import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setChoosenProductId, addInsertedMoney, setInsertedMoney } from '../../store/reducers/productsSlice';
import MoneyReceiver from '../MoneyReceiver/MoneyReceiver';
import ChooseProduct from '../ChooseProduct/ChooseProduct';
import { getProductById } from '../../store/selectors/productsSelector';
import getChangeOutput from '../../common/getChangeOutput';

function Dashboard() {
  const dispatch = useAppDispatch();
  const insertedMoney = useAppSelector((state) => state.products.insertedMoney);
  const product = useAppSelector((state) => getProductById(state, state.products.choosenProductId));

  const changeOutput = useMemo(() => {
    if (!product || !insertedMoney) {
      return [];
    }

    const changeReceived = getChangeOutput(insertedMoney, product.price);

    return Object.entries(changeReceived).reverse();
  }, [insertedMoney, product]);

  return (
    <section className="dashboard">
      <MoneyReceiver handleSubmit={(money) => dispatch(addInsertedMoney(money))} />

      <ChooseProduct handleSubmmit={(productId) => dispatch(setChoosenProductId(productId))} />

      <div className="dashboard__output">
        <div className="dashboard__change-output">
          {
            changeOutput.map(([key, value]) => {
              if (value) {
                return (
                  <span>
                    {key}
                    ₽:
                    {' '}
                    {value}
                    {' '}
                    coins
                  </span>
                );
              }

              return null;
            })
          }
        </div>

        <button
          type="button"
          onClick={() => {
            dispatch(setChoosenProductId(0));
            dispatch(setInsertedMoney(0));
          }}
          className="dashboard__button"
          disabled={!product}
        >
          {product && (
            <div className="dashboard__product">
              <h3>{product.name}</h3>
              <p>{product.type}</p>
              <span>
                {product.price}
                ₽
              </span>
            </div>
          )}
        </button>
      </div>
    </section>
  );
}

export default Dashboard;

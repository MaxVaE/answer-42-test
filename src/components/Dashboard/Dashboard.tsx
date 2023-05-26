import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProductId, addInsertedMoney, setInsertedMoney } from '../../store/products/slice';
import { MoneyReceiver } from '../MoneyReceiver';
import { SelectedProduct } from '../SelectedProduct';
import { selectProductById, selectProducts } from '../../store/products/selector';
import { getChangeOutput } from '../../utils/getChangeOutput';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { insertedMoney } = useSelector(selectProducts);
  const product = useSelector(selectProductById);

  const changeOutput = useMemo(() => {
    if (!product || !insertedMoney) {
      return [];
    }

    const changeReceived = getChangeOutput(insertedMoney, product.price);

    return Object.entries(changeReceived).reverse();
  }, [insertedMoney, product]);

  return (
    <section className="dashboard">
      <MoneyReceiver onSubmit={(money) => dispatch(addInsertedMoney(money))} />

      <SelectedProduct onSubmit={(productId) => dispatch(setSelectedProductId(productId))} />

      <div className="dashboard__output">
        <div className="dashboard__change-output">
          {
            changeOutput.map(([key, value]) => {
              if (value) {
                return (
                  <span key={key}>
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
            dispatch(setSelectedProductId(0));
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
};

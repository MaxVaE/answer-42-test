import { clsx } from 'clsx';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/products/selector';

export const Display = () => {
  const { list: products, insertedMoney } = useSelector(selectProducts);

  return (
    <section className="display">
      <ul className="display__list">
        {products.map(({
          name, type, price, id,
        }) => (
          <li key={id} className={clsx('display__product', { 'display__product--active': price <= insertedMoney })}>
            <h3>{name}</h3>
            <p className="display__type">{type}</p>

            <div className="display__price">
              <span>
                {price}
                ₽
              </span>

              <span className="display__number">{id}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

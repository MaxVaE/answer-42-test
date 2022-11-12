import { clsx } from 'clsx';
import { useAppSelector } from '../../store/hooks';

function Display() {
  const { list: products, insertedMoney } = useAppSelector((state) => state.products);

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
}

export default Display;

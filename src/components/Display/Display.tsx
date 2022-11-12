import { useAppSelector } from '../../store/hooks';

function Display() {
  const products = useAppSelector((state) => state.products.value);

  return (
    <section className="display">
      <ul className="display__list">
        {products.map(({
          name, type, price, id,
        }, index) => (
          <li key={id} className="display__product">
            <h3>{name}</h3>
            <p className="display__type">{type}</p>

            <div className="display__price">
              <span>
                {price}
                ₽
              </span>

              <span className="display__number">{index + 1}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Display;

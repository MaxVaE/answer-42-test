import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { VALID_MONEY } from '../../utils/constants';
import { DashboardForm } from '../DashboardForm';
import { selectProducts } from '../../store/products/selector';

const INSERT_MONEY_MESSAGE = 'Insert money';

interface MoneyReceiverProps {
  onSubmit: (money: number) => void;
}

export const MoneyReceiver = ({
  onSubmit,
}: MoneyReceiverProps) => {
  const { selectedProductId, insertedMoney } = useSelector(selectProducts);

  const [moneyMessage, setMoneyMessage] = useState(INSERT_MONEY_MESSAGE);

  const handleSubmit = (value: string) => {
    const money = Number(value);

    if (!money || !VALID_MONEY.includes(money)) {
      setMoneyMessage('Money is not accepted');
      return;
    }

    onSubmit(money);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (insertedMoney) {
        setMoneyMessage(`Inserted money: ${insertedMoney}₽`);
        return;
      }

      setMoneyMessage(INSERT_MONEY_MESSAGE);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [moneyMessage, insertedMoney]);

  return (
    <DashboardForm
      name="money"
      message={moneyMessage}
      onSubmit={handleSubmit}
      disabled={!!selectedProductId}
    >
      <p>Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in 1, 2, 5 and 10 ₽ coins.</p>
    </DashboardForm>
  );
};

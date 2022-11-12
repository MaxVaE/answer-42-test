import { useEffect, useState } from 'react';

import { VALID_MONEY } from '../../common/const';
import { useAppSelector } from '../../store/hooks';
import DashboardForm from '../DashboardForm/DashboardForm';

const INSERT_MONEY_MESSAGE = 'Insert money';

type MoneyReceiverProps = {
  handleSubmit: (money: number) => void;
};

function MoneyReceiver({
  handleSubmit,
}: MoneyReceiverProps) {
  const { choosenProductId, insertedMoney } = useAppSelector((state) => state.products);

  const [moneyMessage, setMoneyMessage] = useState(INSERT_MONEY_MESSAGE);

  useEffect(() => {
    setTimeout(() => {
      if (insertedMoney) {
        setMoneyMessage(`Inserted money: ${insertedMoney}₽`);
        return;
      }

      setMoneyMessage(INSERT_MONEY_MESSAGE);
    }, 1000);
  }, [moneyMessage, insertedMoney]);

  return (
    <DashboardForm
      name="money"
      message={moneyMessage}
      submitHandler={submitHandler}
      disabled={!!choosenProductId}
    >
      <p>Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in 1, 2, 5 and 10 ₽ coins.</p>
    </DashboardForm>
  );

  function submitHandler(value: string) {
    const money = Number(value);

    if (!money || !VALID_MONEY.includes(money)) {
      setMoneyMessage('Money is not accepted');
      return;
    }

    handleSubmit(money);
  }
}

export default MoneyReceiver;

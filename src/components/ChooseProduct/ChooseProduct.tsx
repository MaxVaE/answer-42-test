import { useEffect, useState } from 'react';

import { useAppSelector } from '../../store/hooks';
import DashboardForm from '../DashboardForm/DashboardForm';

const DEFAULT_PRODUCT_MESSAGE = '/';

type ChooseProductProps = {
  handleSubmmit: (id: number) => void;
};

function ChooseProduct({
  handleSubmmit,
}: ChooseProductProps) {
  const { choosenProductId, insertedMoney, list } = useAppSelector((state) => state.products);

  const [productMessage, setProductMessage] = useState(DEFAULT_PRODUCT_MESSAGE);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (choosenProductId) {
        setProductMessage('Success');
        return;
      }

      if (!insertedMoney) {
        setProductMessage(DEFAULT_PRODUCT_MESSAGE);
        return;
      }

      setProductMessage('Choose product');
    }, 1000);
  }, [productMessage, choosenProductId, insertedMoney]);

  return (
    <DashboardForm
      name="product"
      message={productMessage}
      submitHandler={submitProduct}
      value={formValue}
      disabled={!insertedMoney || !!choosenProductId}
      changeValue={(value) => setFormValue(value)}
    />
  );

  function submitProduct(value: string) {
    const productId = Number(value);

    if (!productId) {
      setProductMessage('Enter correct product number');
      return;
    }

    const product = list.find(({ id }) => id === productId);

    if (!product) {
      setProductMessage('Enter correct product number');
      return;
    }

    if (product.price > insertedMoney) {
      setProductMessage('Not enough money');
      return;
    }

    handleSubmmit(productId);
    setFormValue('');
  }
}

export default ChooseProduct;

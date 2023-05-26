import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DashboardForm } from '../DashboardForm';
import { selectProducts } from '../../store/products/selector';

const DEFAULT_PRODUCT_MESSAGE = '/';

interface ChooseProductProps {
  onSubmit: (id: number) => void
}

export const SelectedProduct = ({
  onSubmit: handleSubmit,
}: ChooseProductProps) => {
  const { selectedProductId, insertedMoney, list } = useSelector(selectProducts);

  const [productMessage, setProductMessage] = useState(DEFAULT_PRODUCT_MESSAGE);
  const [formValue, setFormValue] = useState('');

  const submitProduct = (value: string) => {
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

    handleSubmit(productId);
    setFormValue('');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (selectedProductId) {
        setProductMessage('Success');
        return;
      }

      if (!insertedMoney) {
        setProductMessage(DEFAULT_PRODUCT_MESSAGE);
        return;
      }

      setProductMessage('Choose product');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [productMessage, selectedProductId, insertedMoney]);

  return (
    <DashboardForm
      name="product"
      message={productMessage}
      onSubmit={submitProduct}
      value={formValue}
      disabled={!insertedMoney || !!selectedProductId}
      changeValue={(value) => setFormValue(value)}
    />
  );
};

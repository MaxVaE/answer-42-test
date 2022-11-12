import { FormEvent, ReactNode } from 'react';

interface DashboardFormProps {
  name: string;
  message: string;
  value?: string;
  disabled?: boolean;
  children?: ReactNode;
  submitHandler: (value: string) => void;
  changeValue?: (value: string) => void;
}

function DashboardForm({
  name,
  message,
  value,
  disabled = false,
  children,
  submitHandler,
  changeValue,
}: DashboardFormProps) {
  return (
    <form className="dashboard-form" onSubmit={handleSubmit}>
      <label htmlFor={name} className="dashboard-form__label">{message}</label>
      <input
        name={name}
        className="dashboard-form__input"
        type="text"
        placeholder="..."
        value={value}
        onChange={(event) => changeValue && changeValue(event.target.value)}
        disabled={disabled}
      />
      {children}
    </form>
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);

    const nameValue = form.get(name);

    if (nameValue && typeof nameValue === 'string') {
      submitHandler(nameValue);
    }
  }
}

export default DashboardForm;

import { Form, Input } from 'antd';
import { ReactElement } from 'react';

type Props = {
  label?: string;
};

export function InputNumber({ label }: Props): ReactElement {
  const formatPhoneNumber = (value: string) => {
    // Удаляем все, кроме цифр
    const cleaned = value.replace(/\D/g, '');

    // Ограничиваем длину (11 цифр, включая 7)
    const limited = cleaned.slice(0, 11);

    // Форматируем по шаблону
    let formatted = '';
    for (let i = 0; i < limited.length; i++) {
      if (i === 0) {
        formatted += `+7 `;
      } else if (i === 4) {
        formatted += ' ' + limited[i];
      } else if (i === 7) {
        formatted += ' ' + limited[i];
      } else if (i === 9) {
        formatted += ' ' + limited[i];
      } else {
        formatted += limited[i];
      }
    }
    return formatted;
  };

  return (
    <Form.Item
      label={label}
      name={'phone_number'}
      initialValue={'+7 '}
      normalize={(value) => formatPhoneNumber(value)}
      rules={[
        {
          pattern: /^\+7 \d{3} \d{3} \d{2} \d{2}$/,
          message: 'Введите номер в формате: +7 XXX XXX XX XX',
        },
      ]}
    >
      <Input placeholder={'+7 XXX XXX XX XX'} allowClear />
    </Form.Item>
  );
}

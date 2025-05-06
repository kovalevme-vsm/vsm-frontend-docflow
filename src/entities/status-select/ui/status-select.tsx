import { Form } from 'antd';
import { FormItemProps } from 'antd/es/form/FormItem';
import { ReactElement, ReactNode } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

interface Props extends FormItemProps {
  label?: ReactNode;
  name: string;
  placeholder?: string;
}

export function StatusSelect({
  label,
  name,
  placeholder = 'Статус',
  ...props
}: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Пожалуйста, выберите статус' }]}
      {...props}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={placeholder}
        filterOption={false}
        queryKey={dictionaryQueryKey.statusSelect()}
        path={dictionaryApiPath.status}
      />
    </Form.Item>
  );
}

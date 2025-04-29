import { Form } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
};

export function StatusSelect({
  label,
  name,
  placeholder = 'Статус',
}: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Пожалуйста, выберите статус' }]}
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

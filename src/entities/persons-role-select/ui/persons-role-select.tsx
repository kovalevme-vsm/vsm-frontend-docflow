import { Form } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
};

export function PersonsRoleSelect({ label }: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={'role'}
      rules={[{ required: true, message: 'Пожалуйста, выберите Роль' }]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={'Роль'}
        filterOption={false}
        queryKey={dictionaryQueryKey.personsRoleSelect()}
        path={dictionaryApiPath.personsRole}
      />
    </Form.Item>
  );
}

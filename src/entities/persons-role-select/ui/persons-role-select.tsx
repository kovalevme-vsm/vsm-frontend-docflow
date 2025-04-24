import { Form } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

export function PersonsRoleSelect(): ReactElement {
  return (
    <Form.Item
      label={'Роль'}
      name={'role'}
      rules={[{ required: true, message: 'Пожалуйста, выберите Роль' }]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        filterOption={false}
        queryKey={dictionaryQueryKey.personsRoleSelect()}
        path={dictionaryApiPath.personsRole}
      />
    </Form.Item>
  );
}

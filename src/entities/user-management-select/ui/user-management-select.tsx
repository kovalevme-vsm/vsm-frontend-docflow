import { Form, FormListFieldData } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { userApiPath, usersQueryKey } from 'shared/lib/query';

type UserManagementSelectProps = {
  formListField?: FormListFieldData;
  label?: string;
  className?: string;
};

export function UserManagementSelect({
  formListField,
  label = 'Получатель',
  className,
}: UserManagementSelectProps): ReactElement {
  return (
    <Form.Item
      name={'person'}
      label={label}
      {...formListField}
      className={className}
      rules={[{ required: true, message: 'Пожалуйста, выберите получателя' }]}
    >
      <SelectWithAddItem
        placeholder={'Выберите получателя'}
        allowClear
        showSearch={true}
        filterOption={false}
        queryKey={usersQueryKey.userManagementList()}
        path={userApiPath.userManagementList}
      />
    </Form.Item>
  );
}

import { Form, FormListFieldData } from 'antd';
import { NamePath } from 'rc-field-form/lib/interface';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { userApiPath, usersQueryKey } from 'shared/lib/query';

type UserManagementSelectProps = {
  formListField?: FormListFieldData;
  label?: string;
  className?: string;
  name?: NamePath;
};

export function UserManagementSelect({
  formListField,
  label,
  className,
  name = 'recipient',
}: UserManagementSelectProps): ReactElement {
  return (
    <Form.Item
      name={name}
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

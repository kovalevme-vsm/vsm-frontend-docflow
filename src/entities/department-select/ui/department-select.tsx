import { Form } from 'antd';
import { NamePath } from 'rc-field-form/lib/interface';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
  name?: NamePath;
};

export function DepartmentSelect({
  label,
  name = 'department',
}: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Пожалуйста, выберите отдел' }]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={'Отдел'}
        filterOption={false}
        queryKey={dictionaryQueryKey.departmentSelect()}
        path={dictionaryApiPath.department}
      />
    </Form.Item>
  );
}

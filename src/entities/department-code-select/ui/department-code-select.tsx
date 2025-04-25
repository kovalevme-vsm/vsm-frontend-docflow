import { Form } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
};

export function DepartmentCodeSelect({ label }: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={'code'}
      rules={[{ required: true, message: 'Пожалуйста, выберите Код Отдела' }]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={'Код Отдела'}
        filterOption={false}
        queryKey={dictionaryQueryKey.departmentCodesSelect()}
        path={dictionaryApiPath.departmentCode}
      />
    </Form.Item>
  );
}

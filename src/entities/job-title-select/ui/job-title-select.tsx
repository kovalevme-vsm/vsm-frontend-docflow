import { Form } from 'antd';
import { NamePath } from 'rc-field-form/lib/interface';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
  name?: NamePath;
};

export function JobTitleSelect({
  label,
  name = 'job_title',
}: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Пожалуйста, выберите должность' }]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={'Должность'}
        filterOption={false}
        queryKey={dictionaryQueryKey.jobTitleSelect()}
        path={dictionaryApiPath.jobTitle}
      />
    </Form.Item>
  );
}

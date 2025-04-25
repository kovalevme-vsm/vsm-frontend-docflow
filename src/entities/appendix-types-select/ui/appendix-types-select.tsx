import { Form, FormListFieldData } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type Props = {
  formListField?: FormListFieldData;
  label?: string;
  className?: string;
};

export function AppendixTypesSelect({
  formListField,
  className,
  label,
}: Props): ReactElement {
  return (
    <Form.Item
      name={'appendix-type'}
      label={label}
      {...formListField}
      className={className}
      rules={[
        {
          required: true,
          message: 'Пожалуйста, выберите тип приложения',
        },
      ]}
    >
      <SelectWithAddItem
        placeholder={'Выберите тип приложения'}
        allowClear
        showSearch={true}
        filterOption={false}
        queryKey={dictionaryQueryKey.appendixTypeSelect()}
        path={dictionaryApiPath.appendixType}
      />
    </Form.Item>
  );
}

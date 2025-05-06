import { Form, FormListFieldData } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type ConfidentialityLevelSelectProps = {
  formListField?: FormListFieldData;
  label?: string;
  className?: string;
};

export function ConfidentialityLevelSelect({
  formListField,
  label,
  className,
}: ConfidentialityLevelSelectProps): ReactElement {
  return (
    <Form.Item
      name={'confidentiality-level'}
      label={label}
      {...formListField}
      className={className}
      rules={[
        {
          required: false,
          message: 'Пожалуйста, выберите уровень конфиденциальности',
        },
      ]}
    >
      <SelectWithAddItem
        placeholder={'Выберите уровень конфиденциальности'}
        allowClear
        showSearch={true}
        filterOption={false}
        queryKey={dictionaryQueryKey.confidentialityLevelSelect()}
        path={dictionaryApiPath.confidentialityLevel}
      />
    </Form.Item>
  );
}

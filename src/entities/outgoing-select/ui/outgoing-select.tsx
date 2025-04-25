import { Form } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { outgoingApiPath, outgoingQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
};

export function OutgoingSelect({ label }: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={'outgoings'}
      // rules={[{ required: true, message: 'Пожалуйста, выберите Код Отдела' }]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={'Исходящее'}
        filterOption={false}
        mode="multiple"
        maxTagCount="responsive"
        queryKey={outgoingQueryKey.outgoingSelect()}
        path={outgoingApiPath.outgoingSelect}
      />
    </Form.Item>
  );
}

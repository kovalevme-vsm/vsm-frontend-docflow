import { Form, Input } from 'antd';
import { ReactElement } from 'react';

export function RouteStepName(): ReactElement {
  return (
    <Form.Item
      name={'name'}
      rules={[{ required: true, message: 'Укажите наименование' }]}
    >
      <Input placeholder={'Наименование'} />
    </Form.Item>
  );
}

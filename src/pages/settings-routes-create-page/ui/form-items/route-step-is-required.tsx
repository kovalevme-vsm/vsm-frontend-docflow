import { Form, Radio } from 'antd';
import { ReactElement } from 'react';

export function RouteStepIsRequired(): ReactElement {
  return (
    <Form.Item name={'is_required'} initialValue={true}>
      <Radio.Group
        block
        options={[
          { label: 'Обязательный', value: true },
          { label: 'Необзяательный', value: false },
        ]}
        optionType="button"
        buttonStyle="solid"
      />
    </Form.Item>
  );
}

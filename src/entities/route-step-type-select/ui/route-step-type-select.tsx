import { Form } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { routeApiPath, routeQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
};

export function RouteStepTypeSelect({ label }: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={'step_type'}
      rules={[{ required: true, message: 'Пожалуйста, выберите тип шага' }]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={'Тип шага'}
        filterOption={false}
        queryKey={routeQueryKey.routeStepTypes()}
        path={routeApiPath.routeStepTypes}
      />
    </Form.Item>
  );
}

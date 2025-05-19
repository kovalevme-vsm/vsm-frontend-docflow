import { Checkbox, Form, Input, InputNumber } from 'antd';
import { ReactElement } from 'react';

import { routeStepFormRules } from 'entities/route-forms/models/rules.ts';
import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

export function RouteStepForm(): ReactElement {
  return (
    <>
      <Form.Item name={'order'} hidden rules={routeStepFormRules.name}>
        <InputNumber className={'!w-full'} min={1} placeholder={'Позиция шага'} />
      </Form.Item>
      <Form.Item name={'name'} rules={routeStepFormRules.name}>
        <Input placeholder={'Название шага'} />
      </Form.Item>
      <Form.Item name={'step_type'} rules={routeStepFormRules.step_type}>
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SELECT_STEP_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_STEP_TYPES.keys.list}
          placeholder={'Тип шага'}
        />
      </Form.Item>
      <Form.Item name="is_required" valuePropName="checked" label={null}>
        <Checkbox>Обязательный шаг</Checkbox>
      </Form.Item>
    </>
  );
}

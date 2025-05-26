import { Form, Input, Radio } from 'antd';
import { ReactElement } from 'react';

import { IRouteStep } from 'entities/route-management-form/models/types.ts';
import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

export function RouteManagementStepForm(): ReactElement {
  return (
    <>
      <Form.Item<IRouteStep> name={'name'} rules={[{ required: true, message: 'Пожалуйста, укажите имя этапа' }]}>
        <Input placeholder={'Название этапа'} allowClear />
      </Form.Item>
      <Form.Item<IRouteStep> name={'step_type'} rules={[{ required: true, message: 'Пожалуйста, укажите тип этапа' }]}>
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SELECT_STEP_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_STEP_TYPES.keys.list}
          placeholder={'Тип этапа'}
          allowClear
        />
      </Form.Item>
      <Form.Item<IRouteStep>
        name={'status'}
        rules={[{ required: true, message: 'Пожалуйста, укажите статус завершения этапа' }]}
      >
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.paths.index('statuses')}
          queryKey={QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.list('statuses')}
          placeholder={'Статус завершения этапа'}
          allowClear
        />
      </Form.Item>
      <Form.Item<IRouteStep> name="is_required" initialValue={true}>
        <Radio.Group
          block
          options={[
            { label: 'Обязательный', value: true },
            { label: 'Необязательный', value: false },
          ]}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
    </>
  );
}

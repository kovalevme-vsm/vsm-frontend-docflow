import { Form, FormInstance, Input, Radio } from 'antd';
import { ReactElement } from 'react';

import { IRoute } from 'entities/route-management-form/models/types.ts';
import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

type Props = {
  form: FormInstance<IRoute>;
};

export function RouteManagementBaseForm({ form }: Props): ReactElement {
  return (
    <Form form={form}>
      <Form.Item<IRoute> name={'name'} rules={[{ required: true, message: 'Пожалуйста, укажите имя маршрута' }]}>
        <Input placeholder={'Название маршрута'} allowClear />
      </Form.Item>
      <Form.Item<IRoute> name="is_active" initialValue={true}>
        <Radio.Group
          block
          options={[
            { label: 'Вкл.', value: true },
            { label: 'Выкл.', value: false },
          ]}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Form.Item<IRoute>
        name={'document_type'}
        rules={[{ required: true, message: 'Пожалуйста, укажите тип маршрута' }]}
      >
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.keys.list}
          placeholder={'Тип маршрута'}
          allowClear
        />
      </Form.Item>
      <Form.Item<IRoute> name={'description'}>
        <Input.TextArea
          placeholder={'Описание маршрута'}
          rows={3}
          showCount
          maxLength={100}
          style={{ resize: 'none' }}
        />
      </Form.Item>
    </Form>
  );
}

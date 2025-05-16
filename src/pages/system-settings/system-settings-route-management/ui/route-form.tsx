import { Form, Input, Radio } from 'antd';
import { ReactElement } from 'react';

import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

export function RouteForm(): ReactElement {
  return (
    <div className={'grid grid-cols-3 gap-2'}>
      <Form.Item name={'name'}>
        <Input placeholder={'Название маршрута'} />
      </Form.Item>
      <Form.Item name={'document_type'}>
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.keys.list}
          placeholder={'Тип документа'}
        />
      </Form.Item>
      <Form.Item name="is_active" initialValue={true}>
        <Radio.Group
          block
          options={[
            { label: 'Активирован', value: true },
            { label: 'Деактивирован', value: false },
          ]}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Form.Item name={'description'} className={'col-span-3'}>
        <Input.TextArea placeholder={'Описание маршрута'} />
      </Form.Item>
    </div>
  );
}

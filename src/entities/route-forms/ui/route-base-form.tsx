import { Form, Input, Radio } from 'antd';
import { ReactElement } from 'react';

import { routeBaseFormRules } from 'entities/route-forms/models/rules.ts';
import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

export function RouteBaseForm(): ReactElement {
  return (
    <>
      <Form.Item name={'name'} rules={routeBaseFormRules.name}>
        <Input placeholder={'Название маршрута'} />
      </Form.Item>
      <div className={'grid grid-cols-2 gap-2'}>
        <Form.Item name={'document_type'} rules={routeBaseFormRules.document_type}>
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
      </div>
      <Form.Item name={'description'} className={'col-span-3'} initialValue={''}>
        <Input.TextArea
          placeholder={'Описание маршрута'}
          maxLength={120}
          showCount
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </Form.Item>
    </>
  );
}

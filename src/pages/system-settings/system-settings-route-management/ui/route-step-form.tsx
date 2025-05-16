import { Form, Input, InputNumber, Radio } from 'antd';
import { ReactElement } from 'react';

import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

type Props = {
  headFieldName: string | number;
};

export function RouteStepForm(props: Props): ReactElement {
  return (
    <>
      <div className={'grid grid-cols-3 gap-2'}>
        <Form.Item name={'order'}>
          <InputNumber className={'!w-full'} placeholder={'Последовательность шага'} />
        </Form.Item>
        <Form.Item name={[props.headFieldName, 'name']}>
          <Input placeholder={'Название шага'} />
        </Form.Item>
        <Form.Item name={[props.headFieldName, 'step_type']}>
          <SelectInfinite
            apiPath={QUERY.SYSTEM_SELECT_STEP_TYPES.paths.index}
            queryKey={QUERY.SYSTEM_SELECT_STEP_TYPES.keys.list}
            placeholder={'Тип шага'}
          />
        </Form.Item>
      </div>
      <div className={'grid grid-cols-2 gap-2'}>
        <Form.Item name={[props.headFieldName, 'allow_return']} initialValue={true}>
          <Radio.Group
            block
            options={[
              { label: 'Возвращаемый', value: true },
              { label: 'Нет', value: false },
            ]}
            optionType="button"
            buttonStyle="outline"
          />
        </Form.Item>
        <Form.Item name={[props.headFieldName, 'can_delegate']} initialValue={true}>
          <Radio.Group
            block
            options={[
              { label: 'Делегируемый', value: true },
              { label: 'Нет', value: false },
            ]}
            optionType="button"
            buttonStyle="outline"
          />
        </Form.Item>
      </div>
    </>
  );
}

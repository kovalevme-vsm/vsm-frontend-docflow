import { Button, Form, type FormInstance, Radio } from 'antd';
import { ReactElement, ReactNode } from 'react';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

import { Label } from 'shared/ui';

type Props<T> = {
  form: FormInstance<T>;
  onFinish?: ((values: T) => void) | undefined;
  loading?: boolean;
  onValuesChange?: () => void;
  fields?: ReactNode;
};
export function DictionaryManagementForm<T>(props: Props<T>): ReactElement {
  return (
    <Form onValuesChange={props.onValuesChange} form={props.form} layout={'vertical'} onFinish={props.onFinish}>
      {props.fields}
      <Form.Item name="is_active" initialValue={true} label={<Label icon={IoShieldCheckmarkSharp} title={'Статус'} />}>
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
      <Form.Item>
        <Button htmlType={'submit'} type={'primary'} block>
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
}

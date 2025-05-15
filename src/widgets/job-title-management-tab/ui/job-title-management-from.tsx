import { Button, Form, type FormInstance, Input, Radio } from 'antd';
import { ReactElement } from 'react';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

import { Label } from 'shared/ui';

type Props<T> = {
  form: FormInstance<T>;
  onFinish?: ((values: T) => void) | undefined;
  loading?: boolean;
  onValuesChange?: () => void;
};
export function JobTitleManagementForm<T>(props: Props<T>): ReactElement {
  return (
    <Form onValuesChange={props.onValuesChange} form={props.form} layout={'vertical'} onFinish={props.onFinish}>
      <Form.Item
        name={'name'}
        rules={[
          {
            required: true,
            message: 'Пожалуйста, укажите название должности',
          },
        ]}
      >
        <Input placeholder={'Название должности'} />
      </Form.Item>
      <Form.Item
        name="is_active"
        initialValue={true}
        label={<Label icon={IoShieldCheckmarkSharp} title={'Статус должности'} />}
      >
        <Radio.Group
          block
          options={[
            { label: 'Активирована', value: true },
            { label: 'Деактивирована', value: false },
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

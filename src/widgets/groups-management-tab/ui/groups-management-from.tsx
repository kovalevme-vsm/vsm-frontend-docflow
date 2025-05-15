import { Button, Form, type FormInstance, Input } from 'antd';
import { ReactElement } from 'react';

type Props<T> = {
  form: FormInstance<T>;
  onFinish?: ((values: T) => void) | undefined;
  loading?: boolean;
  onValuesChange?: () => void;
};
export function GroupsManagementForm<T>(props: Props<T>): ReactElement {
  return (
    <Form onValuesChange={props.onValuesChange} form={props.form} layout={'vertical'} onFinish={props.onFinish}>
      <Form.Item
        name={'name'}
        rules={[
          {
            required: true,
            message: 'Пожалуйста, укажите название группы',
          },
        ]}
      >
        <Input placeholder={'Название группы'} />
      </Form.Item>
      <Form.Item>
        <Button htmlType={'submit'} type={'primary'} block>
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
}

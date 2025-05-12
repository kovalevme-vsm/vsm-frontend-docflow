import { Button, Divider, Form, Input, InputNumber, Modal, Radio } from 'antd';
import { ReactElement, useEffect } from 'react';
import { TbPlus } from 'react-icons/tb';

import { useStepCreate } from 'pages/settings-routes-management/api/use-step-create';

interface Props {
  open: boolean;
  onCancel: () => void;
  lastOrder: number;
  routeId: string;
}

export function CreateRouteStepModal(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { mutate: onCreateStep, isPending, isSuccess } = useStepCreate();

  useEffect(() => {
    if (isSuccess) {
      props.onCancel();
      form.resetFields();
    }
  }, [isSuccess]);

  const onCancel = () => {
    form.resetFields();
    props.onCancel();
  };

  useEffect(() => {
    form.setFieldValue('order', props.lastOrder + 1);
    form.setFieldValue('route', props.routeId);
  }, [props.lastOrder, props.routeId]);

  return (
    <Modal
      open={props.open}
      onCancel={onCancel}
      footer={false}
      centered
      className={'!w-full md:!w-3/4 lg:!w-1/3'}
    >
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <TbPlus className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Добавление шага</h1>
      </div>
      <Form form={form} onFinish={onCreateStep}>
        <Form.Item
          name={'order'}
          hidden
          rules={[
            { required: true, message: 'Пожалуйста, введите нумерации шага!' },
          ]}
        >
          <InputNumber disabled placeholder={'Нумерация шага'} />
        </Form.Item>
        <Form.Item
          name={'route'}
          hidden
          rules={[{ required: true, message: 'Пожалуйста, укажите маршрут!' }]}
        >
          <Input disabled placeholder={'Нумерация шага'} />
        </Form.Item>
        <Form.Item
          name={'name'}
          rules={[{ required: true, message: 'Пожалуйста, введите имя шага!' }]}
        >
          <Input placeholder={'Название шага'} />
        </Form.Item>
        <Form.Item name="is_required" initialValue={true}>
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
        <Divider />
        <Form.Item>
          <Button htmlType={'submit'} loading={isPending} block>
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

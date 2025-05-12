import { Button, Divider, Form, Input, InputNumber, Modal, Radio } from 'antd';
import { ReactElement, useEffect } from 'react';
import { IoFootstepsOutline } from 'react-icons/io5';

import { useStepDelete } from 'pages/settings-routes-management/api/use-step-delete.ts';
import { useStepRetrieve } from 'pages/settings-routes-management/api/use-step-retrieve.ts';
import { useStepUpdate } from 'pages/settings-routes-management/api/use-step-update.ts';

interface Props {
  open: boolean;
  onCancel: () => void;
  stepId: string;
  routeId: string | null;
}

export function EditorRouteStepModal(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { data, isPending } = useStepRetrieve(props.stepId);
  const {
    mutate: onUpdateStep,
    isPending: isPendingUpdate,
    isSuccess,
  } = useStepUpdate(props.stepId);
  const {
    mutate: onDeleteStep,
    isPending: isPendingDelete,
    isSuccess: isSuccessDelete,
  } = useStepDelete(props.stepId, props.routeId);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      props.onCancel();
      form.resetFields();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccessDelete) {
      props.onCancel();
      form.resetFields();
    }
  }, [isSuccessDelete]);

  return (
    <Modal
      loading={isPending}
      open={props.open}
      onCancel={props.onCancel}
      footer={false}
      centered
      className={'!w-full md:!w-3/4 lg:!w-1/3'}
    >
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <IoFootstepsOutline className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Редактирование шага</h1>
      </div>
      <Form form={form} onFinish={onUpdateStep}>
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
          name={'name'}
          rules={[{ required: true, message: 'Пожалуйста, введите имя шага!' }]}
        >
          <Input placeholder={'Название шага'} />
        </Form.Item>
        <Form.Item name="is_required">
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
          <Button
            type={'primary'}
            htmlType={'submit'}
            loading={isPendingUpdate}
            block
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
      <Button
        loading={isPendingDelete}
        danger
        block
        onClick={() => onDeleteStep()}
      >
        Удалить
      </Button>
    </Modal>
  );
}

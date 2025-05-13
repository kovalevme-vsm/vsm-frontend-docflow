import { Button, Divider, Form, Input, Modal, Popconfirm, Radio } from 'antd';
import { ReactElement, useEffect } from 'react';
import { IoFootstepsOutline } from 'react-icons/io5';

import { useRouteDelete } from 'pages/settings-routes-management/api/use-route-delete.ts';
import { useRouteRetrieve } from 'pages/settings-routes-management/api/use-route-retrieve.ts';
import { useRouteUpdate } from 'pages/settings-routes-management/api/use-route-update.ts';

interface Props {
  open: boolean;
  onCancel: () => void;
  routeId: string | null;
}

export function EditorRouteModal(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { data, isPending } = useRouteRetrieve(props.routeId);
  const {
    mutate: onUpdateStep,
    isPending: isPendingUpdate,
    isSuccess,
  } = useRouteUpdate(props.routeId || '');
  const {
    mutate: onDeleteStep,
    isPending: isPendingDelete,
    isSuccess: isSuccessDelete,
  } = useRouteDelete(props.routeId);

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
        <h1 className="text-center text-xl font-medium">
          Редактирование Маршрута
        </h1>
      </div>
      <Form form={form} layout={'vertical'} onFinish={onUpdateStep}>
        <Form.Item
          name={'name'}
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите имя маршрута!',
            },
          ]}
        >
          <Input placeholder={'Название маршрута'} />
        </Form.Item>
        <Form.Item
          name={'document_type'}
          rules={[
            {
              required: true,
              message: 'Пожалуйста, укажите тип документа!',
            },
          ]}
        >
          <Input placeholder={'Тип документа'} />
        </Form.Item>
        <Form.Item name="is_active" initialValue={true}>
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
        <Divider />
        <Form.Item>
          <Button
            block
            htmlType={'submit'}
            loading={isPendingUpdate}
            type={'primary'}
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
      <Popconfirm
        title={'Вы уверены, что хотите удалить маршрут?'}
        onConfirm={() => onDeleteStep()}
      >
        <Button loading={isPendingDelete} danger block>
          Удалить
        </Button>
      </Popconfirm>
    </Modal>
  );
}

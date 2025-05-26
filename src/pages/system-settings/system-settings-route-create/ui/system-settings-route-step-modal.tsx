import { Button, Divider, Form, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { IoGitCommit } from 'react-icons/io5';

import { RouteManagementStepForm } from 'entities/route-management-form';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SystemSettingsRouteStepModal(props: Props): ReactElement {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!props.isOpen) {
      form.resetFields();
    }
  }, [props.isOpen]);

  return (
    <Modal centered open={props.isOpen} onCancel={props.onClose} footer={null}>
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <IoGitCommit className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Создание нового этапа</h1>
      </div>
      <Form form={form} name={'step'}>
        <RouteManagementStepForm />
        <Divider />
        <Form.Item>
          <div className={'flex justify-end gap-2'}>
            <Button danger>Отменить</Button>
            <Button htmlType={'submit'} type={'primary'}>
              Добавить
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

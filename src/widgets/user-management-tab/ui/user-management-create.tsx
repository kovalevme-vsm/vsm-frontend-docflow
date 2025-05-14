import { Button, Form, Modal } from 'antd';
import { ReactElement } from 'react';
import { TbUserPlus } from 'react-icons/tb';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function UserManagementCreate(props: Props): ReactElement {
  return (
    <Modal centered open={props.isOpen} onCancel={props.onClose} footer={null}>
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <TbUserPlus className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Создание локального пользователя</h1>
      </div>
      <Form>
        <Form.Item>
          <Button type={'primary'} block>
            Создать
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

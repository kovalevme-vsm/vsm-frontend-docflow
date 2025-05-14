import { Form, Modal } from 'antd';
import { ReactElement, useEffect, useState } from 'react';
import { TbUserPlus } from 'react-icons/tb';

import { useCreateUsersManagement } from 'widgets/user-management-tab/api/use-create-users-management.ts';
import { UserManagerType } from 'widgets/user-management-tab/models/types.ts';
import { UserManagementForm } from 'widgets/user-management-tab/ui/user-management-form.tsx';

type Props = {
  isOpen: boolean;
  onCloseModal: () => void;
};

export function UserManagementCreate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { mutate: onCreateUser, isPending, isSuccess } = useCreateUsersManagement();
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const handleCancel = () => {
    if (isDirty) {
      Modal.confirm({
        title: 'Подтверждение',
        content: 'Вы ввели данные. Закрыть без сохранения?',
        okText: 'Да',
        cancelText: 'Нет',
        onOk: () => {
          form.resetFields();
          props.onCloseModal();
        },
        centered: true,
      });
    } else {
      props.onCloseModal();
      form.resetFields();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setIsDirty(false);
      handleCancel();
    }
  }, [isSuccess]);

  return (
    <Modal
      centered
      open={props.isOpen}
      onCancel={handleCancel}
      footer={null}
      className={'!w-full md:!w-3/4 lg:!w-6/12'}
    >
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <TbUserPlus className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Создание нового пользователя</h1>
      </div>
      <UserManagementForm<Omit<UserManagerType, 'id' | 'last_login'>>
        form={form}
        onFinish={onCreateUser}
        loading={isPending}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

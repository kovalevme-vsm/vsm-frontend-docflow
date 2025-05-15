import { Form, Modal } from 'antd';
import { ReactElement } from 'react';
import { TbUserPlus } from 'react-icons/tb';

import { useCreateUsersManagement } from 'widgets/user-management-tab/api/use-create-users-management.ts';
import { UserManagerType } from 'widgets/user-management-tab/models/types.ts';
import { UserManagementForm } from 'widgets/user-management-tab/ui/user-management-form.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

type Props = {
  isOpen: boolean;
  onCloseModal: () => void;
};

export function UserManagementCreate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { mutate: onCreateUser, isPending, isSuccess } = useCreateUsersManagement();
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

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
      <UserManagementForm<Omit<UserManagerType, 'id' | 'last_login' | 'is_ldap_user'>>
        form={form}
        onFinish={onCreateUser}
        loading={isPending}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

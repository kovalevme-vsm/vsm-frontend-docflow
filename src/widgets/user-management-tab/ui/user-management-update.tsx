import { Form, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { TbUserEdit } from 'react-icons/tb';

import { useRetrieveUsersManagement } from 'widgets/user-management-tab/api/use-retrieve-users-management.ts';
import { useUpdateUsersManagement } from 'widgets/user-management-tab/api/use-update-users-management.ts';
import { UserManagerType } from 'widgets/user-management-tab/models/types.ts';
import { UserManagementForm } from 'widgets/user-management-tab/ui/user-management-form.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

type Props = {
  isOpen: boolean;
  userEditId: string;
  onCloseModal: () => void;
};

export function UserManagementUpdate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { data, isPending } = useRetrieveUsersManagement(props.userEditId);
  const { mutate: onUpdateUser, isPending: isPendingUpdate, isSuccess } = useUpdateUsersManagement(props.userEditId);
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  return (
    <Modal
      centered
      loading={isPending}
      open={props.isOpen}
      onCancel={handleCancel}
      footer={null}
      className={'!w-full md:!w-3/4 lg:!w-6/12'}
    >
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <TbUserEdit className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Редактирование пользователя</h1>
      </div>
      <UserManagementForm<Omit<UserManagerType, 'id' | 'last_login' | 'is_ldap_user'>>
        form={form}
        onFinish={onUpdateUser}
        loading={isPendingUpdate}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

import { Form, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { TbUserEdit } from 'react-icons/tb';

import { useRetrieveGroupsManagement } from 'widgets/groups-management-tab/api/use-retrieve-groups-management.ts';
import { useUpdateGroupsManagement } from 'widgets/groups-management-tab/api/use-update-groups-management.ts';
import { GroupsManagerType } from 'widgets/groups-management-tab/models/types.ts';
import { GroupsManagementForm } from 'widgets/groups-management-tab/ui/groups-management-from.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

type Props = {
  isOpen: boolean;
  userEditId: string;
  onCloseModal: () => void;
};

export function GroupsManagementUpdate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { data, isPending } = useRetrieveGroupsManagement(props.userEditId);
  const { mutate: onUpdateGroups, isPending: isPendingUpdate, isSuccess } = useUpdateGroupsManagement(props.userEditId);
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  return (
    <Modal centered loading={isPending} open={props.isOpen} onCancel={handleCancel} footer={null}>
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <TbUserEdit className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Редактирование группы</h1>
      </div>
      <GroupsManagementForm<Omit<GroupsManagerType, 'id'>>
        form={form}
        onFinish={onUpdateGroups}
        loading={isPendingUpdate}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

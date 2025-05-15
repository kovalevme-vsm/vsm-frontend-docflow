import { Form, Modal } from 'antd';
import { ReactElement } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useCreateGroupsManagement } from 'widgets/groups-management-tab/api/use-create-groups-management.ts';
import { GroupsManagerType } from 'widgets/groups-management-tab/models/types.ts';
import { GroupsManagementForm } from 'widgets/groups-management-tab/ui/groups-management-from.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

type Props = {
  isOpen: boolean;
  onCloseModal: () => void;
};

export function GroupsManagementCreate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { mutate: onCreateGroups, isPending, isSuccess } = useCreateGroupsManagement();
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

  return (
    <Modal centered open={props.isOpen} onCancel={handleCancel} footer={null}>
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <AiOutlineUsergroupAdd className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Создание новой группы</h1>
      </div>
      <GroupsManagementForm<Omit<GroupsManagerType, 'id' | 'created_at'>>
        form={form}
        onFinish={onCreateGroups}
        loading={isPending}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

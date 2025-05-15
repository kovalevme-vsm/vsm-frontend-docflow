import { Form, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { TbUserEdit } from 'react-icons/tb';

import { useRetrieveDepartmentManagement } from 'widgets/department-management-tab/api/use-retrieve-department-management.ts';
import { useUpdateDepartmentManagement } from 'widgets/department-management-tab/api/use-update-department-management.ts';
import { DepartmentManagerType } from 'widgets/department-management-tab/models/types.ts';
import { DepartmentManagementForm } from 'widgets/department-management-tab/ui/department-management-from.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

type Props = {
  isOpen: boolean;
  userEditId: string;
  onCloseModal: () => void;
};

export function DepartmentManagementUpdate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { data, isPending } = useRetrieveDepartmentManagement(props.userEditId);
  const {
    mutate: onUpdateDepartment,
    isPending: isPendingUpdate,
    isSuccess,
  } = useUpdateDepartmentManagement(props.userEditId);
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
        <h1 className="text-center text-xl font-medium">Редактирование отдела</h1>
      </div>
      <DepartmentManagementForm<Omit<DepartmentManagerType, 'id' | 'created_at'>>
        form={form}
        onFinish={onUpdateDepartment}
        loading={isPendingUpdate}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

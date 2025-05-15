import { Form, Modal } from 'antd';
import { ReactElement } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useCreateDepartmentManagement } from 'widgets/department-management-tab/api/use-create-department-management.ts';
import { DepartmentManagerType } from 'widgets/department-management-tab/models/types.ts';
import { DepartmentManagementForm } from 'widgets/department-management-tab/ui/department-management-from.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

type Props = {
  isOpen: boolean;
  onCloseModal: () => void;
};

export function DepartmentManagementCreate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { mutate: onCreateDepartment, isPending, isSuccess } = useCreateDepartmentManagement();
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

  return (
    <Modal centered open={props.isOpen} onCancel={handleCancel} footer={null}>
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <AiOutlineUsergroupAdd className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Создание нового Отдела</h1>
      </div>
      <DepartmentManagementForm<Omit<DepartmentManagerType, 'id' | 'created_at'>>
        form={form}
        onFinish={onCreateDepartment}
        loading={isPending}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

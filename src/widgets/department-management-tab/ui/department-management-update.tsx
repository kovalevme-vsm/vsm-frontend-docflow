import { Form, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { TbUserEdit } from 'react-icons/tb';

import { useRetrieveDepartmentManagement } from 'widgets/department-management-tab/api/use-retrieve-department-management.ts';
import { useUpdateDepartmentManagement } from 'widgets/department-management-tab/api/use-update-department-management.ts';
import { DepartmentManagerType } from 'widgets/department-management-tab/models/types.ts';
import { DepartmentManagementForm } from 'widgets/department-management-tab/ui/department-management-form.tsx';

import { useConfirmCloseModal } from 'shared/hooks';
import { ModalHeader } from 'shared/ui';

type Props = {
  isOpen: boolean;
  editId: string;
  onCloseModal: () => void;
};

export function DepartmentManagementUpdate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { data, isPending } = useRetrieveDepartmentManagement(props.editId);
  const {
    mutate: onUpdateDepartment,
    isPending: isPendingUpdate,
    isSuccess,
  } = useUpdateDepartmentManagement(props.editId);
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  return (
    <Modal centered loading={isPending} open={props.isOpen} onCancel={handleCancel} footer={null}>
      <ModalHeader icon={TbUserEdit} title={'Редактирование отдела'} />
      <DepartmentManagementForm<Omit<DepartmentManagerType, 'id' | 'created_at'>>
        form={form}
        onFinish={onUpdateDepartment}
        loading={isPendingUpdate}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

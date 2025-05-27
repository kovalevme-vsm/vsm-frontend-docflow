import { Form, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { TbUserEdit } from 'react-icons/tb';

import { useRetrieveJobTitleManagement } from 'widgets/job-title-management-tab/api/use-retrieve-job-title-management.ts';
import { useUpdateJobTitleManagement } from 'widgets/job-title-management-tab/api/use-update-job-title-management.ts';
import { JobTitleManagerType } from 'widgets/job-title-management-tab/models/types.ts';
import { JobTitleManagementForm } from 'widgets/job-title-management-tab/ui/job-title-management-from.tsx';

import { useConfirmCloseModal } from 'shared/hooks';
import { ModalHeader } from 'shared/ui';

type Props = {
  isOpen: boolean;
  userEditId: string;
  onCloseModal: () => void;
};

export function JobTitleManagementUpdate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { data, isPending } = useRetrieveJobTitleManagement(props.userEditId);
  const {
    mutate: onUpdateJobTitle,
    isPending: isPendingUpdate,
    isSuccess,
  } = useUpdateJobTitleManagement(props.userEditId);
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  return (
    <Modal centered loading={isPending} open={props.isOpen} onCancel={handleCancel} footer={null}>
      <ModalHeader icon={TbUserEdit} title={'Редактирование должности'} />
      <JobTitleManagementForm<Omit<JobTitleManagerType, 'id' | 'created_at'>>
        form={form}
        onFinish={onUpdateJobTitle}
        loading={isPendingUpdate}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

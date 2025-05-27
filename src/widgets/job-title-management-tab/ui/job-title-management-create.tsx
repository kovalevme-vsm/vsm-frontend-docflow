import { Form, Modal } from 'antd';
import { ReactElement } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useCreateJobTitleManagement } from 'widgets/job-title-management-tab/api/use-create-job-title-management.ts';
import { JobTitleManagerType } from 'widgets/job-title-management-tab/models/types.ts';
import { JobTitleManagementForm } from 'widgets/job-title-management-tab/ui/job-title-management-from.tsx';

import { useConfirmCloseModal } from 'shared/hooks';
import { ModalHeader } from 'shared/ui';

type Props = {
  isOpen: boolean;
  onCloseModal: () => void;
};

export function JobTitleManagementCreate(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { mutate: onCreateJobTitle, isPending, isSuccess } = useCreateJobTitleManagement();
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

  return (
    <Modal centered open={props.isOpen} onCancel={handleCancel} footer={null}>
      <ModalHeader icon={AiOutlineUsergroupAdd} title={'Создание новой должности'} />
      <JobTitleManagementForm<Omit<JobTitleManagerType, 'id' | 'created_at'>>
        form={form}
        onFinish={onCreateJobTitle}
        loading={isPending}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

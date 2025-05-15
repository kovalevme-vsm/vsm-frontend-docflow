import { Form, Modal } from 'antd';
import { ReactElement } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useCreateJobTitleManagement } from 'widgets/job-title-management-tab/api/use-create-job-title-management.ts';
import { JobTitleManagerType } from 'widgets/job-title-management-tab/models/types.ts';
import { JobTitleManagementForm } from 'widgets/job-title-management-tab/ui/job-title-management-from.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

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
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <AiOutlineUsergroupAdd className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Создание новой должности</h1>
      </div>
      <JobTitleManagementForm<Omit<JobTitleManagerType, 'id' | 'created_at'>>
        form={form}
        onFinish={onCreateJobTitle}
        loading={isPending}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

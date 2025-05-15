import { Form, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { TbUserEdit } from 'react-icons/tb';

import { useRetrieveJobTitleManagement } from 'widgets/job-title-management-tab/api/use-retrieve-job-title-management.ts';
import { useUpdateJobTitleManagement } from 'widgets/job-title-management-tab/api/use-update-job-title-management.ts';
import { JobTitleManagerType } from 'widgets/job-title-management-tab/models/types.ts';
import { JobTitleManagementForm } from 'widgets/job-title-management-tab/ui/job-title-management-from.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

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
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <TbUserEdit className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Редактирование должности</h1>
      </div>
      <JobTitleManagementForm<Omit<JobTitleManagerType, 'id' | 'created_at'>>
        form={form}
        onFinish={onUpdateJobTitle}
        loading={isPendingUpdate}
        onValuesChange={() => setIsDirty(true)}
      />
    </Modal>
  );
}

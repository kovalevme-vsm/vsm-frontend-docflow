import { Form, Modal } from 'antd';
import { ReactElement, ReactNode, useEffect } from 'react';
import { TbUserEdit } from 'react-icons/tb';

import { useRetrieveDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-retrieve-dictionary-management.ts';
import { useUpdateDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-update-dictionary-management.ts';
import { DictionaryManagementForm } from 'widgets/dictionary-management-base-tab/ui/dictionary-management-form.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

type Props = {
  dictionary: string;
  isOpen: boolean;
  editId: string;
  onCloseModal: () => void;
  formFields?: ReactNode;
};

export function DictionaryManagementUpdate<T>(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { data, isPending } = useRetrieveDictionaryManagement<T>(props.dictionary, props.editId);
  const {
    mutate: onUpdateDictionary,
    isPending: isPendingUpdate,
    isSuccess,
  } = useUpdateDictionaryManagement(props.dictionary, props.editId);
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
        <h1 className="text-center text-xl font-medium">Редактирование элемента</h1>
      </div>
      <DictionaryManagementForm<Omit<T, 'id' | 'created_at'>>
        form={form}
        onFinish={onUpdateDictionary}
        loading={isPendingUpdate}
        onValuesChange={() => setIsDirty(true)}
        fields={props.formFields}
      />
    </Modal>
  );
}

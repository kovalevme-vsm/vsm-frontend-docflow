import { Form, Modal } from 'antd';
import { ReactElement, ReactNode } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useCreateDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-create-dictionary-management.ts';
import { DictionaryManagementForm } from 'widgets/dictionary-management-base-tab/ui/dictionary-management-form.tsx';

import { useConfirmCloseModal } from 'shared/hooks';

type Props = {
  dictionary: string;
  isOpen: boolean;
  onCloseModal: () => void;
  formFields?: ReactNode;
};

export function DictionaryManagementCreate<T>(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { mutate: onCreateDictionary, isPending, isSuccess } = useCreateDictionaryManagement<T>(props.dictionary);
  const { handleCancel, setIsDirty } = useConfirmCloseModal(isSuccess, form, props.onCloseModal);

  return (
    <Modal centered open={props.isOpen} onCancel={handleCancel} footer={null}>
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <AiOutlineUsergroupAdd className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Создание нового элемента справочника</h1>
      </div>
      <DictionaryManagementForm<T>
        form={form}
        onFinish={onCreateDictionary}
        loading={isPending}
        onValuesChange={() => setIsDirty(true)}
        fields={props.formFields}
      />
    </Modal>
  );
}

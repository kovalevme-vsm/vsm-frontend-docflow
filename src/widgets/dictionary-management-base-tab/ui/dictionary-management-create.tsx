import { Form, Modal } from 'antd';
import { ReactElement, ReactNode } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useCreateDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-create-dictionary-management.ts';
import { DictionaryManagementForm } from 'widgets/dictionary-management-base-tab/ui/dictionary-management-form.tsx';

import { useConfirmCloseModal } from 'shared/hooks';
import { ModalHeader } from 'shared/ui';

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
      <ModalHeader icon={AiOutlineUsergroupAdd} title={'Создание нового элемента справочника'} />
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

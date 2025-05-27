import { Form, Modal } from 'antd';
import { ReactElement, ReactNode, useEffect } from 'react';
import { TbUserEdit } from 'react-icons/tb';

import { useRetrieveDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-retrieve-dictionary-management.ts';
import { useUpdateDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-update-dictionary-management.ts';
import { DictionaryManagementForm } from 'widgets/dictionary-management-base-tab/ui/dictionary-management-form.tsx';

import { useConfirmCloseModal } from 'shared/hooks';
import { ModalHeader } from 'shared/ui';

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
      <ModalHeader icon={TbUserEdit} title={'Редактирование элемента'} />
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

import { FormInstance, Modal } from 'antd';
import { useEffect, useState } from 'react';

export const useConfirmCloseModal = (isSuccess: boolean, form: FormInstance, onCloseModal: () => void) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const handleCancel = () => {
    if (isDirty) {
      Modal.confirm({
        title: 'Подтверждение',
        content: 'Вы ввели данные. Закрыть без сохранения?',
        okText: 'Да',
        cancelText: 'Нет',
        onOk: () => {
          form.resetFields();
          onCloseModal();
        },
        centered: true,
      });
    } else {
      onCloseModal();
      form.resetFields();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setIsDirty(false);
      onCloseModal();
      form.resetFields();
    }
  }, [isSuccess]);

  return { handleCancel, setIsDirty };
};

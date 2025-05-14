import { FormInstance, Modal } from 'antd';
import { useCallback, useEffect, useState } from 'react';

export const useUserManagementCreateModal = () => {
  const [createModalActive, setCreateModalActive] = useState<boolean>(false);

  const handleOpenCreateModal = useCallback(() => setCreateModalActive(true), []);
  const handleCloseCreateModal = useCallback(() => setCreateModalActive(false), []);

  return { createModalActive, handleCloseCreateModal, handleOpenCreateModal };
};

export const useUserManagementEditModal = () => {
  const [updateModalActive, setUpdateModalActive] = useState<boolean>(false);
  const [userEditId, setUserEditId] = useState<string | null>(null);

  const handleOpenUpdateModal = useCallback((id: string) => {
    setUserEditId(id);
    setUpdateModalActive(true);
  }, []);

  const handleCloseUpdateModal = useCallback(() => {
    setUpdateModalActive(false);
    setUserEditId(null);
  }, []);
  return { userEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal };
};

export const useUserManagementConfirmCloseModal = (
  isSuccess: boolean,
  form: FormInstance,
  onCloseModal: () => void
) => {
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
      handleCancel();
    }
  }, [isSuccess]);

  return { handleCancel, setIsDirty };
};

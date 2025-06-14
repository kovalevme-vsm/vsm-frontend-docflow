import { useCallback, useState } from 'react';

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

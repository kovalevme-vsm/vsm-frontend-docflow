import { useCallback, useState } from 'react';

export const useGroupsManagementCreateModal = () => {
  const [createModalActive, setCreateModalActive] = useState<boolean>(false);

  const handleOpenCreateModal = useCallback(() => setCreateModalActive(true), []);
  const handleCloseCreateModal = useCallback(() => setCreateModalActive(false), []);

  return { createModalActive, handleCloseCreateModal, handleOpenCreateModal };
};

export const useGroupsManagementEditModal = () => {
  const [updateModalActive, setUpdateModalActive] = useState<boolean>(false);
  const [groupsEditId, setGroupsEditId] = useState<string | null>(null);

  const handleOpenUpdateModal = useCallback((id: string) => {
    setGroupsEditId(id);
    setUpdateModalActive(true);
  }, []);

  const handleCloseUpdateModal = useCallback(() => {
    setUpdateModalActive(false);
    setGroupsEditId(null);
  }, []);
  return { groupsEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal };
};

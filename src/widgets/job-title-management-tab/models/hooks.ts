import { useCallback, useState } from 'react';

export const useJobTitleManagementCreateModal = () => {
  const [createModalActive, setCreateModalActive] = useState<boolean>(false);

  const handleOpenCreateModal = useCallback(() => setCreateModalActive(true), []);
  const handleCloseCreateModal = useCallback(() => setCreateModalActive(false), []);

  return { createModalActive, handleCloseCreateModal, handleOpenCreateModal };
};

export const useJobTitleManagementEditModal = () => {
  const [updateModalActive, setUpdateModalActive] = useState<boolean>(false);
  const [jobTitleEditId, setJobTitleEditId] = useState<string | null>(null);

  const handleOpenUpdateModal = useCallback((id: string) => {
    setJobTitleEditId(id);
    setUpdateModalActive(true);
  }, []);

  const handleCloseUpdateModal = useCallback(() => {
    setUpdateModalActive(false);
    setJobTitleEditId(null);
  }, []);
  return { jobTitleEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal };
};

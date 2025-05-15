import { useCallback, useState } from 'react';

export const useDepartmentManagementCreateModal = () => {
  const [createModalActive, setCreateModalActive] = useState<boolean>(false);

  const handleOpenCreateModal = useCallback(() => setCreateModalActive(true), []);
  const handleCloseCreateModal = useCallback(() => setCreateModalActive(false), []);

  return { createModalActive, handleCloseCreateModal, handleOpenCreateModal };
};

export const useDepartmentManagementEditModal = () => {
  const [updateModalActive, setUpdateModalActive] = useState<boolean>(false);
  const [departmentEditId, setDepartmentEditId] = useState<string | null>(null);

  const handleOpenUpdateModal = useCallback((id: string) => {
    setDepartmentEditId(id);
    setUpdateModalActive(true);
  }, []);

  const handleCloseUpdateModal = useCallback(() => {
    setUpdateModalActive(false);
    setDepartmentEditId(null);
  }, []);
  return { departmentEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal };
};

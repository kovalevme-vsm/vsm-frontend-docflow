import { useCallback, useState } from 'react';

export const useDictionaryManagementCreateModal = () => {
  const [createModalActive, setCreateModalActive] = useState<boolean>(false);

  const handleOpenCreateModal = useCallback(() => setCreateModalActive(true), []);
  const handleCloseCreateModal = useCallback(() => setCreateModalActive(false), []);

  return { createModalActive, handleCloseCreateModal, handleOpenCreateModal };
};

export const useDictionaryManagementEditModal = () => {
  const [updateModalActive, setUpdateModalActive] = useState<boolean>(false);
  const [dictionaryEditId, setDictionaryEditId] = useState<string | null>(null);

  const handleOpenUpdateModal = useCallback((id: string) => {
    setDictionaryEditId(id);
    setUpdateModalActive(true);
  }, []);

  const handleCloseUpdateModal = useCallback(() => {
    setUpdateModalActive(false);
    setDictionaryEditId(null);
  }, []);
  return { dictionaryEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal };
};

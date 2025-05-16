import { useCallback, useState } from 'react';

export const useOpenModal = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => setModalActive(true), []);
  const handleCloseModal = useCallback(() => setModalActive(false), []);

  return { modalActive, handleCloseModal, handleOpenModal };
};

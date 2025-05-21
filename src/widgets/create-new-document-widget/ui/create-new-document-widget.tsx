import { Button } from 'antd';
import { ReactElement } from 'react';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';

import { SelectDocumentTypeModal } from 'widgets/create-new-document-widget/ui/select-document-type-modal.tsx';

import { useOpenModal } from 'shared/hooks';

export default function CreateNewDocumentWidget(): ReactElement {
  const { handleCloseModal, handleOpenModal, modalActive } = useOpenModal();
  return (
    <div className={'mb-4 px-4'}>
      <Button icon={<HiOutlineDocumentPlus />} type={'primary'} block onClick={handleOpenModal}>
        Создать документ
      </Button>
      <SelectDocumentTypeModal isOpen={modalActive} onClose={handleCloseModal} />
    </div>
  );
}

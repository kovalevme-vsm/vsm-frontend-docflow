import { Modal } from 'antd';
import { ReactElement } from 'react';
import { HiDocumentText } from 'react-icons/hi';
import { HiDocumentArrowDown, HiDocumentArrowUp, HiOutlineClipboardDocumentList } from 'react-icons/hi2';

import { ModalHeader } from 'shared/ui';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SelectDocumentTypeModal(props: Props): ReactElement {
  return (
    <Modal centered open={props.isOpen} onCancel={props.onClose} footer={null}>
      <ModalHeader icon={HiOutlineClipboardDocumentList} title={'Выберите тип документа'} />
      <div className={'grid grid-cols-3 gap-3'}>
        <button
          type={'button'}
          className={'group flex cursor-pointer flex-col items-start rounded-xl bg-gray-100 px-6 py-2'}
        >
          <HiDocumentArrowDown className={'text-xl text-gray-400 duration-300 group-hover:text-blue-500'} />
          <span className={'font-medium duration-300 group-hover:text-blue-500'}>Входящий</span>
        </button>
        <button
          type={'button'}
          className={'group flex cursor-pointer flex-col items-start rounded-xl bg-gray-100 px-6 py-2'}
        >
          <HiDocumentArrowUp className={'text-xl text-gray-400 duration-300 group-hover:text-blue-500'} />
          <span className={'font-medium duration-300 group-hover:text-blue-500'}>Исходящий</span>
        </button>
        <button
          type={'button'}
          className={'group flex cursor-pointer flex-col items-start rounded-xl bg-gray-100 px-6 py-2'}
        >
          <HiDocumentText className={'text-xl text-gray-400 duration-300 group-hover:text-blue-500'} />
          <span className={'font-medium duration-300 group-hover:text-blue-500'}>Приказ</span>
        </button>
      </div>
    </Modal>
  );
}

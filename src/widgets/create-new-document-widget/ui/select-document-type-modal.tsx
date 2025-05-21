import { Modal } from 'antd';
import { ReactElement } from 'react';
import { HiDocumentText } from 'react-icons/hi';
import { HiDocumentArrowDown, HiDocumentArrowUp, HiOutlineClipboardDocumentList } from 'react-icons/hi2';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SelectDocumentTypeModal(props: Props): ReactElement {
  return (
    <Modal centered open={props.isOpen} onCancel={props.onClose} footer={null}>
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <HiOutlineClipboardDocumentList className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Выберите тип документа</h1>
      </div>
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

import { Form, Modal } from 'antd';
import { ReactElement } from 'react';
import { IoPersonAdd } from 'react-icons/io5';

import { RouteManagementStepParticipantForm } from 'entities/route-management-form';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SystemSettingsRouteStepParticipantCreate({ isOpen, onClose }: Props): ReactElement {
  const [form] = Form.useForm();
  return (
    <Modal
      centered
      open={isOpen}
      onCancel={onClose}
      footer={
        <div className={'flex w-full justify-end gap-2'}>
          <button
            className={
              'flex flex-1 cursor-pointer flex-col gap-1 rounded-xl bg-blue-500 px-4 py-2 text-white duration-300 hover:scale-95 hover:text-blue-50'
            }
          >
            <IoPersonAdd className={'self-end text-2xl'} />
            <span className={'self-start text-start text-sm'}>Добавить участника</span>
          </button>
        </div>
      }
    >
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <IoPersonAdd className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Добавление нового участника</h1>
      </div>
      <RouteManagementStepParticipantForm form={form} />
    </Modal>
  );
}

import { Divider, Form, Modal } from 'antd';
import { ReactElement } from 'react';
import { CgPlayListAdd } from 'react-icons/cg';
import { IoPerson, IoPersonAdd } from 'react-icons/io5';

import { SystemSettingsRouteStepParticipantCreate } from 'pages/system-settings/system-settings-route-create/ui/system-settings-route-step-participant-create.tsx';

import { Empty } from 'entities/empty';
import { RouteManagementStepForm } from 'entities/route-management-form';

import { useOpenModal } from 'shared/hooks';
import { Label } from 'shared/ui';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SystemSettingsRouteStepCreate({ isOpen, onClose }: Props): ReactElement {
  const { modalActive, handleOpenModal, handleCloseModal } = useOpenModal();
  const [form] = Form.useForm();
  return (
    <Modal
      centered
      open={isOpen}
      onCancel={onClose}
      footer={
        <div className={'flex w-full gap-2'}>
          <button
            type={'button'}
            onClick={handleOpenModal}
            className={
              'flex flex-1 cursor-pointer flex-col gap-1 rounded-xl bg-gray-200/60 px-4 py-2 duration-300 hover:scale-95 hover:text-blue-500'
            }
          >
            <IoPersonAdd className={'self-end text-2xl'} />
            <span className={'self-start text-sm'}>Добавить участника</span>
          </button>
          <button
            className={
              'flex flex-1 cursor-pointer flex-col gap-1 rounded-xl bg-blue-500 px-4 py-2 text-white duration-300 hover:scale-95 hover:text-blue-50'
            }
          >
            <CgPlayListAdd className={'self-end text-2xl'} />
            <span className={'self-start text-start text-sm'}>Добавить этап</span>
          </button>
        </div>
      }
    >
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <CgPlayListAdd className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Создание нового этапа</h1>
      </div>
      <RouteManagementStepForm form={form} />
      <Divider />
      <Label title={'Участники этапа'} icon={IoPerson} />
      <Empty />
      <SystemSettingsRouteStepParticipantCreate isOpen={modalActive} onClose={handleCloseModal} />
    </Modal>
  );
}

import { Button, Modal } from 'antd';
import { ReactElement } from 'react';
import { TbPlus, TbRoute, TbRoute2 } from 'react-icons/tb';

import { RouteManagementForm } from 'pages/system-settings/system-settings-route-management/ui/route-management-form.tsx';

import { SectionHeader } from 'entities/section-header';

import { useOpenModal } from 'shared/hooks';

export default function SystemSettingsRouteManagement(): ReactElement {
  const { handleOpenModal, modalActive, handleCloseModal } = useOpenModal();
  return (
    <div>
      <SectionHeader
        icon={TbRoute2}
        title={'Управление маршрутами и этапами'}
        description={'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'}
      />
      <Button icon={<TbPlus />} type={'primary'} onClick={handleOpenModal}>
        Создать новый маршрут
      </Button>
      <Modal
        centered
        open={modalActive}
        onCancel={handleCloseModal}
        footer={[]}
        className={'!w-full md:!w-3/4 lg:!w-7/12'}
      >
        <div className="my-6 flex flex-col items-center justify-center gap-2">
          <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
            <TbRoute className="text-5xl text-blue-500" />
          </div>
          <h1 className="text-center text-xl font-medium">Конструктор маршрута документа</h1>
        </div>
        <RouteManagementForm />
      </Modal>
    </div>
  );
}

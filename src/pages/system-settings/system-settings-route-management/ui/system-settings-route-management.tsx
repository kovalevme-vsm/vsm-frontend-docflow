import { Button } from 'antd';
import { ReactElement } from 'react';
import { IoAdd, IoGitBranch } from 'react-icons/io5';

import RouteCreateModal from 'widgets/route-create-modal';

import { SectionHeader } from 'entities/section-header';

import { useOpenModal } from 'shared/hooks';

export default function SystemSettingsRouteManagement(): ReactElement {
  const { modalActive, handleCloseModal, handleOpenModal } = useOpenModal();
  return (
    <div className={'w-full space-y-4'}>
      <SectionHeader
        icon={IoGitBranch}
        title={'Управление маршрутами и этапами'}
        description={'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'}
      />
      <Button onClick={handleOpenModal} type={'primary'} icon={<IoAdd />}>
        Добавить маршрут
      </Button>
      <RouteCreateModal isOpen={modalActive} onClose={handleCloseModal} />
    </div>
  );
}

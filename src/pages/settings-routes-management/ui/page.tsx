import { Button, Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement, useState } from 'react';
import { IoFootstepsOutline } from 'react-icons/io5';
import { TbChevronLeft, TbPlus, TbRoute2 } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { useRouteManagementItemsList } from 'pages/settings-routes-management/api/use-route-management-items-list.ts';
import { ViewerRouteStepModal } from 'pages/settings-routes-management/ui/viewer-route-step-modal.tsx';

import { PageHeader } from 'widgets/page-header';

import { ROUTES } from 'shared/const';
import { IconButton, Search, Table } from 'shared/ui';

export function SettingsRoutesManagement(): ReactElement {
  const navigate = useNavigate();
  const { data, isPending } = useRouteManagementItemsList();
  const [isOpenStepsModal, setIsOpenStepsModal] = useState(false);
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);

  const onOpenStepsModal = (id: string) => {
    setIsOpenStepsModal(true);
    setSelectedRouteId(id);
  };
  const onCloseStepsModal = () => {
    setIsOpenStepsModal(false);
    setSelectedRouteId(null);
  };

  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbRoute2} title={'Управление маршрутами'} />
      </div>
      <div className={'flex gap-4'}>
        <Button
          type={'primary'}
          icon={<TbPlus />}
          onClick={() => navigate(ROUTES.SETTINGS_ROUTES_MANAGEMENT_CREATE)}
        >
          Создать новый маршрут
        </Button>
        <Search />
      </div>
      <Table
        dataSource={data?.results}
        loading={isPending}
        total={data?.count}
        columns={[
          {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Тип документа',
            dataIndex: 'document_type_display',
            key: 'document_type_display',
          },
          {
            title: 'Количество шагов',
            dataIndex: 'steps_count',
            key: 'steps_count',
          },
          {
            title: 'Создано',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (value) => dayjs(value).format('DD MMMM YYYY HH:mm'),
          },
          {
            title: 'Статус',
            dataIndex: 'is_active',
            align: 'center',
            render: (value: boolean) => (
              <Tag color={value ? 'success' : 'error'}>
                {value ? 'Вкл' : 'Выкл'}
              </Tag>
            ),
          },
          {
            title: '',
            dataIndex: 'id',
            align: 'right',
            render: (value: string) => (
              <Button
                icon={<IoFootstepsOutline />}
                type={'link'}
                size={'small'}
                onClick={() => onOpenStepsModal(value)}
              >
                Шаги маршрута
              </Button>
            ),
          },
        ]}
      />
      <ViewerRouteStepModal
        isOpenStepsModal={isOpenStepsModal}
        routeId={selectedRouteId}
        onCancel={onCloseStepsModal}
      />
    </div>
  );
}

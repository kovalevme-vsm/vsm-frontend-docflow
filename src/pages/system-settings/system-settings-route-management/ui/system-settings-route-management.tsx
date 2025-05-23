import { Button, Skeleton } from 'antd';
import { ReactElement, useCallback } from 'react';
import { IoAdd, IoGitBranch } from 'react-icons/io5';
import { useNavigate } from 'react-router';

import { useListRouteManagement } from 'pages/system-settings/system-settings-route-management/api/use-list-route-management.ts';
import { SystemSettingsRouteManagementItem } from 'pages/system-settings/system-settings-route-management/ui/system-settings-route-management-item.tsx';

import { SectionHeader } from 'entities/section-header';

import { ROUTES } from 'shared/const';

export default function SystemSettingsRouteManagement(): ReactElement {
  const { data: routesManagementList, isPending } = useListRouteManagement();
  const navigate = useNavigate();
  const handleCreateRoute = useCallback(() => navigate(ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT_CREATE), []);

  return (
    <div className={'w-full space-y-4'}>
      <SectionHeader
        icon={IoGitBranch}
        title={'Управление маршрутами и этапами'}
        description={'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'}
      />
      <Button onClick={handleCreateRoute} type={'primary'} icon={<IoAdd />}>
        Добавить маршрут
      </Button>
      <div className={'grid grid-cols-2 gap-4'}>
        {isPending && (
          <>
            <Skeleton.Input active className={'!h-40 !w-full !rounded-2xl'} />
            <Skeleton.Input active className={'!h-40 !w-full !rounded-2xl'} />
            <Skeleton.Input active className={'!h-40 !w-full !rounded-2xl'} />
            <Skeleton.Input active className={'!h-40 !w-full !rounded-2xl'} />
            <Skeleton.Input active className={'!h-40 !w-full !rounded-2xl'} />
            <Skeleton.Input active className={'!h-40 !w-full !rounded-2xl'} />
          </>
        )}
        {routesManagementList?.results.map((value) => <SystemSettingsRouteManagementItem key={value.id} {...value} />)}
      </div>
    </div>
  );
}

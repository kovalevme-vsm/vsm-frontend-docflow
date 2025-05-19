import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbPlus, TbRoute2 } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { SectionHeader } from 'entities/section-header';

import { ROUTES } from 'shared/const';

export default function SystemSettingsRouteManagement(): ReactElement {
  const navigate = useNavigate();
  return (
    <div>
      <SectionHeader
        icon={TbRoute2}
        title={'Управление маршрутами и этапами'}
        description={'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'}
      />
      <Button
        icon={<TbPlus />}
        type={'primary'}
        onClick={() => navigate(ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT_CREATE)}
      >
        Создать новый маршрут
      </Button>
    </div>
  );
}

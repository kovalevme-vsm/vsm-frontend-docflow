import { ReactElement } from 'react';
import { TbRoute2 } from 'react-icons/tb';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsRouteManagement(): ReactElement {
  return (
    <SectionHeader
      icon={TbRoute2}
      title={'Управление маршрутами и этапами'}
      description={
        'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'
      }
    />
  );
}

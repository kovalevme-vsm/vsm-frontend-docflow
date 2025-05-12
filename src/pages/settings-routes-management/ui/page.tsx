import { ReactElement } from 'react';
import { TbChevronLeft, TbRoute2 } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { IconButton } from 'shared/ui';

export function SettingsRoutesManagement(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbRoute2} title={'Управление маршрутами'} />
      </div>
    </div>
  );
}

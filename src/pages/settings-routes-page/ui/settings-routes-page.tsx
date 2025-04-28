import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbPlus, TbRoute } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { ROUTES } from 'shared/const';

export function SettingsRoutesPage(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-4'}>
      <PageHeader icon={TbRoute} title={'Маршруты'} />
      <div className={'flex justify-end'}>
        <Button
          icon={<TbPlus />}
          type={'primary'}
          onClick={() => {
            navigate(ROUTES.SETTINGS_ROUTES_CREATE);
          }}
        >
          Создать маршрут
        </Button>
      </div>
    </div>
  );
}

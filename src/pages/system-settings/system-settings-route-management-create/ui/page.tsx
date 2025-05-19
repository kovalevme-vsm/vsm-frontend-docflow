import { Button, Divider, Form } from 'antd';
import { ReactElement } from 'react';
import { IoFootsteps } from 'react-icons/io5';
import { RiInfoCardLine } from 'react-icons/ri';
import { TbPlus } from 'react-icons/tb';

import { RouteBaseForm } from 'pages/system-settings/system-settings-route-management-create/ui/route-forms/route-base-form.tsx';

import { Empty } from 'entities/empty';
import { SectionHeader } from 'entities/section-header';

import { Label } from 'shared/ui';

export default function SystemSettingsRouteManagementCreate(): ReactElement {
  return (
    <div className={'flex h-full flex-col'}>
      <SectionHeader
        icon={TbPlus}
        title={'Создание нового маршрута'}
        description={'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'}
      />
      <Form>
        <div className={'flex gap-2'}>
          <div className={'flex-1'}>
            <Label title={'Общая информация о маршруте'} icon={RiInfoCardLine} />
            <RouteBaseForm />
          </div>
          <Divider type={'vertical'} className={'!h-auto'} />
          <div className={'flex-1'}>
            <div className={'flex items-center justify-between'}>
              <Label title={'Шаги маршрута'} icon={IoFootsteps} />
              <Button size={'small'} type={'primary'}>
                Добавить шаг
              </Button>
            </div>
            <Empty />
          </div>
        </div>
      </Form>
    </div>
  );
}

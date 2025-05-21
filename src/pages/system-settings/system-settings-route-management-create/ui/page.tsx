import { Button, Divider, Form } from 'antd';
import { ReactElement, useCallback, useState } from 'react';
import { IoFootsteps } from 'react-icons/io5';
import { RiInfoCardLine } from 'react-icons/ri';
import { TbPlus } from 'react-icons/tb';

import { useCreateRouteManagement } from 'pages/system-settings/system-settings-route-management-create/api/use-create-route-management.ts';
import { AddRouteStepModal } from 'pages/system-settings/system-settings-route-management-create/ui/add-route-step-modal.tsx';

import { Empty } from 'entities/empty';
import { RouteManagementBaseForm } from 'entities/route-management-form';
import { IRoute, IRouteStep } from 'entities/route-management-form/models/types.ts';
import { SectionHeader } from 'entities/section-header';

import { useOpenModal } from 'shared/hooks';
import { Label } from 'shared/ui';

export default function SystemSettingsRouteManagementCreate(): ReactElement {
  const [form] = Form.useForm<IRoute>();
  const { modalActive, handleCloseModal, handleOpenModal } = useOpenModal();
  const { mutate: onCreateRoute, isPending } = useCreateRouteManagement();
  const [steps, setSteps] = useState<IRouteStep[]>([]);

  const handleCreateRouteManagement = useCallback(async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    if (values) {
      values.steps = steps;
      onCreateRoute(values);
    }
  }, [steps]);

  return (
    <div className={'relative flex h-full flex-col'}>
      <SectionHeader
        icon={TbPlus}
        title={'Создание нового маршрута'}
        description={'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'}
      />

      <div className={'flex flex-col gap-2'}>
        <div className={'flex-1'}>
          <Label title={'Общая информация о маршруте'} icon={RiInfoCardLine} />
          <RouteManagementBaseForm form={form} />
        </div>
        <Divider type={'vertical'} className={'!h-auto'} />
        <div className={'flex-1'}>
          <div className={'flex items-center justify-between'}>
            <Label title={'Шаги маршрута'} icon={IoFootsteps} />
            <Button size={'small'} type={'primary'} onClick={handleOpenModal}>
              Добавить шаг
            </Button>
          </div>
          <Empty />
        </div>
      </div>
      <div className={'sticky bottom-0 flex w-full justify-end rounded-2xl bg-gray-100 p-4'}>
        <Button loading={isPending} type={'primary'} onClick={handleCreateRouteManagement}>
          Сохранить маршрут
        </Button>
      </div>
      <AddRouteStepModal
        isOpen={modalActive}
        onClose={handleCloseModal}
        onAddRouteStep={(values) => {
          setSteps((el) => [...el, { ...values, order: el.length + 1 }]);
        }}
      />
    </div>
  );
}

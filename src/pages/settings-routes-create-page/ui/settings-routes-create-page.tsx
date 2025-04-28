import { Background, Controls, ReactFlow } from '@xyflow/react';
import { Button, Card, Form, Input, Radio } from 'antd';
import { ReactElement, useState } from 'react';
import { TbPlus, TbRoute } from 'react-icons/tb';

import { useRouteCreate } from 'pages/settings-routes-create-page/api/useRouteCreate.ts';
import { CreateRouteStepModal } from 'pages/settings-routes-create-page/ui/create-route-step-modal.tsx';

import { PageHeader } from 'widgets/page-header';

import { RouteDocumentTypeSelect } from 'entities/route-document-type-select';

import '@xyflow/react/dist/style.css';

export function SettingsRoutesCreatePage(): ReactElement {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  const { mutate: onCreateRoute, isPending } = useRouteCreate();
  return (
    <div className={'space-y-4'}>
      <PageHeader icon={TbRoute} title={'Создание маршрута'} />
      <Card variant="borderless" size={'small'}>
        <Form className={'grid grid-cols-4 gap-2'} onFinish={onCreateRoute}>
          <RouteDocumentTypeSelect />
          <Form.Item
            name={'name'}
            rules={[
              { required: true, message: 'Пожалуйста, укажите наименование' },
            ]}
          >
            <Input placeholder={'Наименование'} />
          </Form.Item>
          <Form.Item name={'is_active'} initialValue={true}>
            <Radio.Group
              block
              options={[
                { label: 'Активный', value: true },
                { label: 'Неактивный', value: false },
              ]}
              defaultValue={true}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
          <Form.Item>
            <Button
              loading={isPending}
              block
              type={'primary'}
              htmlType={'submit'}
            >
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <div />
      <div className={'grid grid-cols-2 gap-4'}>
        <Card variant="borderless" size={'small'}>
          <div className={'h-96'}>
            <ReactFlow>
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </Card>
        <Card variant="borderless" size={'small'} className={'h-fit'}>
          <Button
            onClick={handleOpenModal}
            icon={<TbPlus />}
            size={'large'}
            type={'dashed'}
            block
          >
            Создать новый шаг
          </Button>
        </Card>
      </div>
      <CreateRouteStepModal isOpen={isOpenModal} onClose={handleCloseModal} />
    </div>
  );
}

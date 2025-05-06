import { Button, Card, Divider, Drawer, Form, Input, Radio, Table } from 'antd';
import { ReactElement, useState } from 'react';
import { TbPlus, TbRoute, TbTrafficLights } from 'react-icons/tb';

import { useRouteCreate } from 'pages/settings-routes-create-page/api/useRouteCreate';
import { StepRoute } from 'pages/settings-routes-create-page/models/types.ts';
import { RouteStepActions } from 'pages/settings-routes-create-page/ui/form-items/route-step-actions.tsx';
import { RouteStepParticipants } from 'pages/settings-routes-create-page/ui/form-items/route-step-participants.tsx';

import { PageHeader } from 'widgets/page-header';

import { RouteDocumentTypeSelect } from 'entities/route-document-type-select';
import { StatusSelect } from 'entities/status-select';

import { Label } from 'shared/ui';

export function SettingsRoutesCreatePage(): ReactElement {
  const { mutate: onCreateRouteTemplate, isPending } = useRouteCreate();
  const [isOpenRouteStepDrawer, setIsOpenRouteStepDrawer] = useState<boolean>();
  const handleOpenRouteStepDrawer = () => setIsOpenRouteStepDrawer(true);
  const handleCloseRouteStepDrawer = () => setIsOpenRouteStepDrawer(false);
  const [steps, setSteps] = useState<StepRoute[]>([]);
  return (
    <div className={'flex flex-col gap-4'}>
      <PageHeader icon={TbRoute} title={'Создание маршрута'} />
      <Form.Provider
        onFormFinish={(name, { forms }) => {
          if (name === 'route_step') {
            const routeStep: StepRoute = forms.route_step.getFieldsValue();
            setSteps((el) => [...el, { ...routeStep, order: el.length + 1 }]);
            handleCloseRouteStepDrawer();
            forms.route_step.resetFields();
          }
        }}
      >
        <Card variant="borderless" size={'small'}>
          <Form
            name="route"
            className={'grid grid-cols-4 gap-2'}
            onFinish={(values) => onCreateRouteTemplate({ ...values, steps })}
          >
            <Form.Item
              name={'name'}
              rules={[
                { required: true, message: 'Пожалуйста, укажите наименование' },
              ]}
            >
              <Input placeholder={'Наименование'} />
            </Form.Item>
            <RouteDocumentTypeSelect />
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
        <Button
          onClick={handleOpenRouteStepDrawer}
          icon={<TbPlus />}
          size={'large'}
          type={'dashed'}
          block
        >
          Создать новый шаг
        </Button>
        <Table
          size={'small'}
          dataSource={steps}
          columns={[
            {
              title: '№',
              dataIndex: 'order',
            },
            {
              title: 'Наименование',
              dataIndex: 'name',
            },
          ]}
        />

        <Drawer
          closable={false}
          open={isOpenRouteStepDrawer}
          onClose={handleCloseRouteStepDrawer}
          classNames={{ wrapper: '!w-full md:!w-2/3 lg:!w-1/3' }}
        >
          <div
            className={'my-6 flex flex-col items-center justify-center gap-2'}
          >
            <div
              className={'w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50'}
            >
              <TbRoute className={'text-5xl text-blue-500'} />
            </div>
            <h1 className={'text-center text-xl font-medium'}>
              Добавление нового шага маршрута
            </h1>
          </div>
          <Form name={'route_step'} layout={'vertical'} requiredMark={false}>
            <Form.Item className={'!mb-4'} name={'name'}>
              <Input placeholder={'Наименование'} />
            </Form.Item>
            <Form.Item name={'is_required'} initialValue={true}>
              <Radio.Group
                block
                options={[
                  { label: 'Обязательный шаг', value: true },
                  {
                    label: 'Необязательный шаг',
                    value: false,
                  },
                ]}
                optionType="button"
                buttonStyle="solid"
              />
            </Form.Item>
            <StatusSelect
              name={'status'}
              label={<Label title={'Статус'} icon={TbTrafficLights} />}
            />
            <RouteStepParticipants />
            <RouteStepActions />
            <Divider />
            <Form.Item>
              <Button htmlType={'submit'} block type={'primary'}>
                Добавить
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </Form.Provider>
    </div>
  );
}

import { Background, ReactFlow } from '@xyflow/react';
import { Button, Form, Skeleton } from 'antd';
import { motion } from 'framer-motion';
import { ReactElement, useCallback, useState } from 'react';
import { IoBan, IoGitBranch, IoGitCommit, IoSaveOutline } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import { useNavigate } from 'react-router';

import { useCreateRoute } from 'pages/system-settings/system-settings-route-create/api/use-create-route.ts';
import { IRouteCreate } from 'pages/system-settings/system-settings-route-create/models/types.ts';
import {
  SystemSettingsRouteStepModal
} from 'pages/system-settings/system-settings-route-create/ui/system-settings-route-step-modal.tsx';

import { Empty } from 'entities/empty';
import { RouteManagementBaseForm } from 'entities/route-management-form';
import { IRouteStep } from 'entities/route-management-form/models/types.ts';
import { SectionHeader } from 'entities/section-header';

import { ROUTES } from 'shared/const';
import { Label, TileButton } from 'shared/ui';

function SystemSettingsRouteCreate(): ReactElement {
  const [form] = Form.useForm();

  const [open, setOpen] = useState(false);

  const showStepModal = () => {
    setOpen(true);
  };

  const hideStepModal = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const { mutate: onCreateRoute, isPending } = useCreateRoute();

  const handleSubmitRoute = useCallback(() => {
    form.submit();
  }, []);

  const handleCancelCreateRoute = useCallback(() => {
    navigate(ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT, { replace: true });
  }, []);

  return (
    <div className={'flex h-full flex-col'}>
      <div className={'flex w-full flex-1'}>
        <div className={'h-full w-full'}>
          <ReactFlow>
            <Background gap={12} size={1} />
          </ReactFlow>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={'h-full w-full flex-1/2 p-4 shadow-lg'}
        >
          <Form.Provider
            onFormFinish={(name, { values, forms }) => {
              if (name === 'step') {
                const { route } = forms;
                const users = route.getFieldValue('steps') || [];
                route.setFieldsValue({ steps: [...users, values] });
                setOpen(false);
              }
            }}
          >
            <SectionHeader icon={IoGitBranch} title={'Создание нового маршрута'} description={''} />
            <Form<IRouteCreate>
              form={form}
              onFinish={(values) => {
                onCreateRoute(values);
              }}
              name={'route'}
            >
              <RouteManagementBaseForm />
              <Form.Item name="steps" noStyle />
              <Label icon={IoGitCommit} title={'Этапы маршрута'} />
              <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}>
                {({ getFieldValue }) => {
                  const steps: IRouteStep[] = getFieldValue('steps') || [];
                  return steps.length ? (
                    steps.map((value) => (
                      <div className={'flex items-center justify-between rounded-xl bg-gray-100 px-3 py-2'}>
                        <div>
                          <span className={'text-base font-medium'}>{value.name}</span>
                        </div>
                        <Button icon={<MdCancel />} type={'text'} danger />
                      </div>
                    ))
                  ) : (
                    <Empty />
                  );
                }}
              </Form.Item>
              <Form.Item>
                <div className={'grid grid-cols-3 gap-2'}>
                  <TileButton type={'danger'} icon={IoBan} title={'Отменить'} onClick={handleCancelCreateRoute} />
                  <TileButton type={'default'} icon={IoGitCommit} title={'Добавить этап'} onClick={showStepModal} />
                  {isPending ? (
                    <Skeleton.Button className={'!h-full !w-full !rounded-xl'} />
                  ) : (
                    <TileButton type={'primary'} icon={IoSaveOutline} title={'Сохранить'} onClick={handleSubmitRoute} />
                  )}
                </div>
              </Form.Item>
              <SystemSettingsRouteStepModal isOpen={open} onClose={hideStepModal} />
            </Form>
          </Form.Provider>
        </motion.div>
      </div>
    </div>
  );
}

export default SystemSettingsRouteCreate;

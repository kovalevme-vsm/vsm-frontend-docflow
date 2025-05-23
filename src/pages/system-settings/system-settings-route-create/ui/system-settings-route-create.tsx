import { Background, ReactFlow } from '@xyflow/react';
import { Divider, Form, Skeleton } from 'antd';
import { motion } from 'framer-motion';
import { ReactElement, useCallback } from 'react';
import { IoBan, IoGitBranch, IoGitCommit, IoSaveOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';

import { useCreateRoute } from 'pages/system-settings/system-settings-route-create/api/use-create-route.ts';
import { IRouteCreate } from 'pages/system-settings/system-settings-route-create/models/types.ts';

import { RouteManagementBaseForm } from 'entities/route-management-form';
import { SectionHeader } from 'entities/section-header';

import { ROUTES } from 'shared/const';
import { TileButton } from 'shared/ui';

function SystemSettingsRouteCreate(): ReactElement {
  const [form] = Form.useForm();
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
          className={'relative h-full w-full flex-1/2 p-4 shadow-lg'}
        >
          <SectionHeader icon={IoGitBranch} title={'Создание нового маршрута'} description={''} />
          <Form<IRouteCreate>
            form={form}
            onFinish={(values) => {
              onCreateRoute(values);
            }}
          >
            <RouteManagementBaseForm />
          </Form>
          <Divider />
          <div className={'sticky bottom-2 grid grid-cols-3 gap-2'}>
            <TileButton type={'danger'} icon={IoBan} title={'Отменить'} onClick={handleCancelCreateRoute} />
            <TileButton type={'default'} icon={IoGitCommit} title={'Добавить этап'} />
            {isPending ? (
              <Skeleton.Button className={'!h-full !w-full !rounded-xl'} />
            ) : (
              <TileButton type={'primary'} icon={IoSaveOutline} title={'Сохранить'} onClick={handleSubmitRoute} />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SystemSettingsRouteCreate;

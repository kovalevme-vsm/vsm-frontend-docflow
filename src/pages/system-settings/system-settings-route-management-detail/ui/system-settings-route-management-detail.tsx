import { Background, Handle, Position, ReactFlow } from '@xyflow/react';
import { Button, Divider, Segmented, Tag } from 'antd';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { ReactElement, useCallback, useMemo } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoGitBranch } from 'react-icons/io5';
import { useNavigate, useParams, useSearchParams } from 'react-router';

import { useRetrieveRouteManagement } from 'pages/system-settings/system-settings-route-management-detail/api/use-retrieve-route-management.ts';
import { RouteManagementBaseSegment } from 'pages/system-settings/system-settings-route-management-detail/ui/route-management-base-segment.tsx';
import { RouteManagementStepSegment } from 'pages/system-settings/system-settings-route-management-detail/ui/route-management-step-segment.tsx';

import { SectionHeader } from 'entities/section-header';

import { ROUTES } from 'shared/const';

function TextUpdaterNode({ data }) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className={'flex min-w-64 flex-col gap-2 rounded-xl bg-gray-100 p-4'}>
        <span className={'font-medium'}>{data.label}</span>
        <Divider size={'small'} />
        <div className={'flex gap-2'}>
          <Tag>На подпись</Tag> <Tag>Подписано</Tag>
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}
export function SystemSettingsRouteManagementDetail(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const segment = searchParams.get('segment') || 'base';
  const { id } = useParams();
  const { data } = useRetrieveRouteManagement(id);

  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate(ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT);
  }, []);

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  return (
    <div className={'flex h-full max-h-full w-full space-y-4 overflow-hidden'}>
      <div className={'h-full w-full flex-1/2'}>
        <ReactFlow
          fitView
          attributionPosition="bottom-left"
          nodes={data?.nodes}
          edges={data?.edges}
          defaultEdgeOptions={{ animated: true }}
          nodeTypes={nodeTypes}
        >
          <Button onClick={handleBack} className={'z-10 m-4'} icon={<IoIosArrowBack />}>
            К списку маршрутов
          </Button>
          {data && (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={'fixed m-4 w-1/4 rounded-xl bg-neutral-50 p-4 shadow-lg/5'}
            >
              <div className={'flex items-start justify-between'}>
                <div>
                  <h2 className={'font-medium'}>{data?.name}</h2>
                  <p className={'text-xs text-gray-500'}>{data?.description}</p>
                </div>
                <span className={'text-end text-xs text-gray-400'}>
                  {dayjs(data?.created_at).format('DD MMM YYYY HH:mm:ss')}
                </span>
              </div>
              <div className={'mt-4 flex items-center justify-between'}>
                <Tag color={'blue'}>{data?.document_type_display}</Tag>
                {data?.is_active ? <Tag color={'success'}>Вкл</Tag> : <Tag color={'error'}>Выкл</Tag>}
              </div>
            </motion.div>
          )}
          <Background />
        </ReactFlow>
      </div>
      {data && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={'relative h-full w-1/3 p-4 shadow-lg'}
        >
          <SectionHeader
            icon={IoGitBranch}
            title={'Конфигуратор маршрута'}
            description={'Управляйте жизненным циклом документов с помощью этапов маршрута'}
          />
          <Segmented
            value={segment}
            options={[
              { label: 'Основное', value: 'base' },
              { label: 'Этапы маршрута', value: 'route-steps' },
            ]}
            block
            onChange={(value) => setSearchParams({ segment: value })}
          />
          <div className={'my-4'}>
            {segment === 'base' && <RouteManagementBaseSegment data={data} />}
            {segment === 'route-steps' && <RouteManagementStepSegment />}
          </div>
        </motion.div>
      )}
    </div>
  );
}

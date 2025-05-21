import { Background, ReactFlow } from '@xyflow/react';
import { Divider, Form } from 'antd';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { CgPlayListAdd } from 'react-icons/cg';
import { IoGitBranch, IoGitCommit } from 'react-icons/io5';
import { TbPlus } from 'react-icons/tb';

import { Empty } from 'entities/empty';
import { RouteManagementBaseForm } from 'entities/route-management-form';
import { SectionHeader } from 'entities/section-header';

import { Label } from 'shared/ui';

const initialNodes = [
  { id: '1', position: { x: 50, y: 50 }, data: { label: '1' } },
  { id: '2', position: { x: 50, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
function SystemSettingsRouteCreate(): ReactElement {
  const [form] = Form.useForm();
  return (
    <div className={'flex h-full flex-col'}>
      <div className={'flex w-full flex-1'}>
        <div className={'h-full w-full'}>
          <ReactFlow nodes={initialNodes} edges={initialEdges}>
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
          <RouteManagementBaseForm form={form} />
          <Divider />
          <Label title={'Этапы маршрута'} icon={IoGitCommit} />
          <Empty />

          <div className={'absolute right-0 bottom-0 left-4'}>
            <Divider />
            <div className={'flex w-full gap-2'}>
              <button
                className={
                  'flex flex-1 cursor-pointer flex-col gap-1 rounded-xl bg-gray-200/60 px-4 py-2 duration-300 hover:scale-95 hover:text-blue-500'
                }
              >
                <CgPlayListAdd className={'self-end text-2xl'} />
                <span className={'self-start text-sm'}>Добавить этап</span>
              </button>
              <button
                className={
                  'flex flex-1 cursor-pointer flex-col gap-1 rounded-xl bg-blue-500 px-4 py-2 text-white duration-300 hover:scale-95 hover:text-blue-50'
                }
              >
                <TbPlus className={'self-end text-2xl'} />
                <span className={'self-start text-start text-sm'}>Создать маршрут</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default SystemSettingsRouteCreate;

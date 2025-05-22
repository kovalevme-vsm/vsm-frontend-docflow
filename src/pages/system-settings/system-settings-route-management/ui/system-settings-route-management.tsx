import { Button, Switch, Tag } from 'antd';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoGitBranch } from 'react-icons/io5';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsRouteManagement(): ReactElement {
  return (
    <div className={'w-full space-y-4'}>
      <SectionHeader
        icon={IoGitBranch}
        title={'Управление маршрутами и этапами'}
        description={'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'}
      />
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={
          'w-full rounded-2xl border border-blue-500/0 bg-gradient-to-bl from-green-100/20 from-5% to-gray-100 px-8 py-3 duration-300 hover:border-blue-500/10'
        }
      >
        <div className={'flex items-end justify-between'}>
          <div className={'flex flex-col'}>
            <div className={'mb-2 w-fit rounded-lg bg-gray-50 p-2 text-2xl text-blue-500'}>
              <IoGitBranch />
            </div>
            <span className={'font-medium'}>Новый маршрут</span>
            <span className={'text-xs'}>Описание нового маршрута для входящего документа</span>
            <div className={'mt-2 flex'}>
              <Tag>Входящий</Tag>
            </div>
          </div>

          <div className={'flex flex-col items-end justify-end gap-4'}>
            <Button icon={<AiOutlineSetting />} />
            <Switch
              size={'small'}
              checkedChildren="Вкл"
              unCheckedChildren="Выкл"
              defaultChecked={true}
              className="custom-switch"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={'w-full rounded-2xl bg-gradient-to-bl from-red-100/20 from-5% to-gray-100 px-8 py-3'}
      >
        <div className={'flex items-end justify-between'}>
          <div className={'flex flex-col'}>
            <div className={'mb-2 w-fit rounded-lg bg-gray-50 p-2 text-2xl text-blue-500'}>
              <IoGitBranch />
            </div>
            <span className={'font-medium'}>Новый маршрут</span>
            <span className={'text-xs'}>Описание нового маршрута для исходящего документа</span>
            <div className={'mt-2 flex'}>
              <Tag>Исходящий</Tag>
            </div>
          </div>

          <div className={'flex flex-col items-end justify-end gap-4'}>
            <Button icon={<AiOutlineSetting />} />
            <Switch
              size={'small'}
              checkedChildren="Вкл"
              unCheckedChildren="Выкл"
              defaultChecked={false}
              className="custom-switch"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

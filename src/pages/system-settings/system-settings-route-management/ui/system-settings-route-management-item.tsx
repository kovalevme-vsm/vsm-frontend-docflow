import { Button, Tag } from 'antd';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoGitBranch } from 'react-icons/io5';

import { SystemSettingsRouteSwitchStatus } from 'pages/system-settings/system-settings-route-management/ui/system-settings-route-switch-status.tsx';

type Props = {
  id: string;
  name: string;
  description: string;
  document_type_display: string;
  is_active: boolean;
  created_at: string;
};

export function SystemSettingsRouteManagementItem(props: Props): ReactElement {
  return (
    <motion.div
      className={`w-full rounded-2xl border border-blue-500/0 bg-gradient-to-bl ${props.is_active ? 'from-green-100/20' : 'from-red-100/20'} from-5% to-gray-100 px-8 py-3 duration-300 hover:border-blue-500/10 dark:to-gray-900`}
    >
      <div className={'flex items-end justify-between'}>
        <div className={'flex flex-col'}>
          <div className={'mb-2 w-fit rounded-lg bg-gray-50 p-2 text-2xl text-blue-500'}>
            <IoGitBranch />
          </div>
          <span className={'font-medium dark:text-gray-50'}>{props.name}</span>
          <span className={'text-xs dark:text-gray-50'}>{props.description}</span>
          <div className={'mt-2 flex'}>
            <Tag>{props.document_type_display}</Tag>
            <Tag>Создан: {dayjs(props.created_at).format('DD MMM YYYY HH:mm:ss')}</Tag>
          </div>
        </div>

        <div className={'flex flex-col items-end justify-end gap-4'}>
          <Button icon={<AiOutlineSetting />} />
          <SystemSettingsRouteSwitchStatus id={props.id} is_active={props.is_active} />
        </div>
      </div>
    </motion.div>
  );
}

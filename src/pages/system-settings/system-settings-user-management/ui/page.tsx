import { Tabs } from 'antd';
import { ReactElement } from 'react';
import { TbUsers } from 'react-icons/tb';
import { useSearchParams } from 'react-router';

import { TAB_ITEMS } from 'pages/system-settings/system-settings-user-management/models/tab-items.tsx';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsUserManagement(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <SectionHeader
        icon={TbUsers}
        title={'Управление пользователями и ролями'}
        description={'Настраивайте Роли пользователям, редактируйте информацию о пользователях и создавайте новых'}
      />
      <Tabs
        activeKey={searchParams.get('tab') || TAB_ITEMS[0].key}
        type="card"
        onChange={(activeKey: string) => setSearchParams({ tab: activeKey })}
        size={'small'}
        items={TAB_ITEMS}
      />
    </div>
  );
}

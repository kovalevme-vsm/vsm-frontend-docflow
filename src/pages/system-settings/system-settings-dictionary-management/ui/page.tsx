import { Tabs } from 'antd';
import { ReactElement } from 'react';
import { TbBooks } from 'react-icons/tb';
import { useSearchParams } from 'react-router';

import { TAB_ITEMS } from 'pages/system-settings/system-settings-dictionary-management/models/tab-items';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsDictionaryManagement(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className={'space-y-4'}>
      <SectionHeader
        icon={TbBooks}
        title={'Справочники'}
        description={'Настройте справочники системы (статусы, типы, тэги и тд.)'}
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

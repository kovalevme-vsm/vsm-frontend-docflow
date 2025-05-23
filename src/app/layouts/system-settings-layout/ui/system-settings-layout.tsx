import { ReactElement } from 'react';
import { TbSettings } from 'react-icons/tb';
import { Outlet } from 'react-router';

import { PageHeader } from 'entities/page-header';

import { SettingsItems } from '../models/items.ts';

import { SystemSettingsMenuItem } from './system-settings-menu-item.tsx';

export default function SystemSettingsLayout(): ReactElement {
  return (
    <div className={'h-full space-y-4'}>
      <PageHeader icon={TbSettings} title={'Системные настройки'} />
      <div className={'flex h-[calc(100%-3.5rem)] gap-4'}>
        <div
          id={'sub-menu'}
          className={'flex h-full flex-col gap-2 border-r border-r-gray-200 pr-4 dark:border-r-gray-800'}
        >
          {SettingsItems.map((value) => (
            <SystemSettingsMenuItem key={value.title} {...value} />
          ))}
        </div>
        <div className={'min-h-full flex-1 overflow-auto'}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

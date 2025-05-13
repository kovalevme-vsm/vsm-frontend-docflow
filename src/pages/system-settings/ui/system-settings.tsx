import { ReactElement } from 'react';
import { TbSettings } from 'react-icons/tb';

import { PageHeader } from 'entities/page-header';

export default function SystemSettings(): ReactElement {
  return (
    <div className={'h-full space-y-4'}>
      <PageHeader icon={TbSettings} title={'Системные настройки'} />
      <div className={'flex h-[calc(100%-3.5rem)] gap-4'}>
        <div
          id={'sub-menu'}
          className={'h-full border-r border-r-gray-200 p-4'}
        >
          menu
        </div>
        <div className={'flex-1 p-4'}>content</div>
      </div>
    </div>
  );
}

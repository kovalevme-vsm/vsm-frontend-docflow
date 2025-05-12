import { ReactElement } from 'react';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { Outlet } from 'react-router';

import { SidebarMenu } from 'widgets/sidebar-menu';
import { UserHeaderCard } from 'widgets/user-header-card';

import { IconButton } from 'shared/ui';

export function BasePageLayout(): ReactElement {
  return (
    <main
      className={
        'flex h-dvh w-screen gap-4 overflow-hidden bg-neutral-50 p-4 dark:bg-gray-950'
      }
    >
      <SidebarMenu />
      <div className={'flex h-full flex-1 flex-col overflow-hidden'}>
        <div
          className={
            'flex h-14 w-full items-center justify-between rounded-2xl py-2 xl:justify-end'
          }
        >
          <IconButton
            onClick={() => {
              const element = document.getElementById('vsm-doc-sidebar');
              if (element) {
                element.classList.remove('hidden');
                element.classList.add('block');
              }
            }}
            icon={TbLayoutSidebarLeftExpand}
            wrapperClassName={'block xl:hidden'}
          />
          <UserHeaderCard />
        </div>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

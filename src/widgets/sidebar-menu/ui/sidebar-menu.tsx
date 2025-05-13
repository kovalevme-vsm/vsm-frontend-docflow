import { motion } from 'framer-motion';
import { ReactElement } from 'react';

import { SidebarHiddenButton } from 'widgets/sidebar-menu/ui/sidebar-hidden-button.tsx';
import { SidebarMenuItem } from 'widgets/sidebar-menu/ui/sidebar-menu-item.tsx';

import { SignOutButton } from 'features/sign-out-button';

import { ApplicationLogo } from 'entities/application-logo';
import { SystemCopyright } from 'entities/system-copyright';

import { SIDEBAR_ITEMS } from 'shared/lib/sidebar';

export function SidebarMenu(): ReactElement {
  return (
    <motion.aside
      id={'vsm-doc-sidebar'}
      className={`fixed top-0 z-10 hidden h-dvh min-w-fit space-y-16 border-r border-r-gray-200 bg-gray-50 pt-8 pr-4 shadow-[28px_0px_31px_-28px_rgba(0,_0,_0,_0.15)] xl:relative xl:sticky xl:block xl:h-full xl:pt-0 xl:pr-0 xl:shadow-none dark:border-r-gray-800 dark:bg-gray-950`}
    >
      <div className={'flex h-full flex-col justify-between'}>
        <div>
          <ApplicationLogo size={'small'} />
          <div className={'my-16 -ml-4'}>
            {SIDEBAR_ITEMS.map((value) => (
              <SidebarMenuItem key={value.route} {...value} />
            ))}
          </div>
        </div>

        <div className={'mb-4 space-y-2 xl:mb-0'}>
          <SignOutButton />
          <SidebarHiddenButton />
          <div>
            <SystemCopyright />
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

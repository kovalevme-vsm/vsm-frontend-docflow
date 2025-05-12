import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { RiUserSettingsLine } from 'react-icons/ri';
import {
  TbBook,
  TbCategory,
  TbFile,
  TbFiles,
  TbMailDown,
  TbMailUp,
  TbRoute2,
  TbSettings,
} from 'react-icons/tb';

import { ApplicationLogo } from 'widgets/application-logo';
import { SidebarHiddenButton } from 'widgets/sidebar-menu/ui/sidebar-hidden-button.tsx';
import { SidebarMenuItem } from 'widgets/sidebar-menu/ui/sidebar-menu-item.tsx';
import { SignOutButton } from 'widgets/sign-out-button';
import { SystemCopyright } from 'widgets/system-copyright';

import { ROUTES } from 'shared/const';

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
            <SidebarMenuItem
              title={'Панель управления'}
              icon={TbCategory}
              route={ROUTES.DASHBOARD}
            />
            <SidebarMenuItem
              title={'Документы'}
              icon={TbFiles}
              route={ROUTES.DOCUMENTS_BASE}
              children={[
                {
                  title: 'Входящие',
                  route: ROUTES.DOCUMENTS_INCOMING,
                  icon: TbMailDown,
                },
                {
                  title: 'Исходящие',
                  route: ROUTES.DOCUMENTS_OUTGOING,
                  icon: TbMailUp,
                },
                {
                  title: 'Договоры',
                  route: ROUTES.DOCUMENTS_CONTRACT,
                  icon: TbFile,
                },
              ]}
            />
            <SidebarMenuItem
              title={'Настройки системы'}
              icon={TbSettings}
              route={ROUTES.SETTINGS_BASE}
              children={[
                {
                  title: 'Справочники',
                  route: ROUTES.SETTINGS_DICTIONARY,
                  icon: TbBook,
                },
                {
                  title: 'Управление пользователями',
                  route: ROUTES.SETTINGS_USERS_MANAGEMENT,
                  icon: RiUserSettingsLine,
                },
                {
                  title: 'Управление маршрутами',
                  route: ROUTES.SETTINGS_ROUTES_MANAGEMENT,
                  icon: TbRoute2,
                },
              ]}
            />
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

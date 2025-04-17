import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { ApplicationLogo } from 'widgets/application-logo';
import {
  TbCategory,
  TbDoorExit,
  TbFiles,
  TbHelp,
  TbLayoutSidebarLeftCollapse,
  TbMailDown,
  TbMailUp,
} from 'react-icons/tb';
import { SidebarMenuItem } from 'widgets/sidebar-menu/ui/sidebar-menu-item.tsx';
import { Button, TextButton } from 'shared/ui';
import { ROUTES } from 'shared/const';

export function SidebarMenu(): ReactElement {
  return (
    <motion.aside
      id={'vsm-doc-sidebar'}
      className={`fixed top-0 z-10 hidden h-dvh w-fit space-y-16 border-r border-r-gray-200 bg-gray-50 pt-8 pr-4 shadow-[28px_0px_31px_-28px_rgba(0,_0,_0,_0.15)] xl:relative xl:block xl:h-full xl:pt-0 xl:pr-0 xl:shadow-none dark:border-r-gray-800 dark:bg-gray-950`}
    >
      <div className={'flex h-full flex-col justify-between'}>
        <div>
          <ApplicationLogo size={'small'} />
          <div className={'my-16'}>
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
                  icon: TbMailDown,
                  route: ROUTES.DOCUMENTS_INCOMING,
                },
                {
                  title: 'Исходящие',
                  icon: TbMailUp,
                  route: ROUTES.DOCUMENTS_OUTGOING,
                },
              ]}
            />
          </div>
        </div>

        <div className={'mb-4 space-y-2 xl:mb-0'}>
          <TextButton title={'Помощь'} icon={TbHelp} />
          <TextButton title={'Выйти из системы'} icon={TbDoorExit} />
          <Button
            icon={TbLayoutSidebarLeftCollapse}
            className={'mt-4 !flex xl:!hidden'}
            onClick={() => {
              const element = document.getElementById('vsm-doc-sidebar');
              if (element) {
                element.classList.remove('block');
                element.classList.add('hidden');
              }
            }}
            block
          >
            Скрыть меню
          </Button>
        </div>
      </div>
    </motion.aside>
  );
}

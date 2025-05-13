import { TbCategory, TbSettings } from 'react-icons/tb';

import { ROUTES } from 'shared/const';

export const SIDEBAR_ITEMS = [
  {
    title: 'Панель управления',
    icon: TbCategory,
    route: ROUTES.DASHBOARD,
  },
  {
    title: 'Системные настройки',
    icon: TbSettings,
    route: ROUTES.SYSTEM_SETTINGS,
  },
];

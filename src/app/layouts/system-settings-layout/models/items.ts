import {
  TbApi,
  TbBook,
  TbBooks,
  TbLock,
  TbNotification,
  TbRoute2,
  TbSettings,
  TbUsers,
} from 'react-icons/tb';

import { SettingsItem } from 'pages/system-settings/models/types.ts';

import { ROUTES } from 'shared/const';

export const SettingsItems: SettingsItem[] = [
  {
    title: 'Общие настройки',
    icon: TbSettings,
    path: ROUTES.SYSTEM_SETTINGS,
  },
  {
    title: 'Справочники',
    icon: TbBooks,
    path: ROUTES.SYSTEM_SETTINGS_DICTIONARY,
  },
  {
    title: 'Управление пользователями и ролями',
    icon: TbUsers,
    path: ROUTES.SYSTEM_SETTINGS_USER_MANAGEMENT,
  },
  {
    title: 'Управление маршрутами и этапами',
    icon: TbRoute2,
    path: ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT,
  },
  {
    title: 'Интеграции и API',
    icon: TbApi,
    path: ROUTES.SYSTEM_SETTINGS_INTEGRATION_MANAGEMENT,
  },
  {
    title: 'Уведомления и оповещения',
    icon: TbNotification,
    path: ROUTES.SYSTEM_SETTINGS_NOTIFICATION_MANAGEMENT,
  },
  {
    title: 'Аудит и отчетность',
    icon: TbBook,
    path: ROUTES.SYSTEM_SETTINGS_AUDIT_MANAGEMENT,
  },
  {
    title: 'Настройки безопасности',
    icon: TbLock,
    path: ROUTES.SYSTEM_SETTINGS_SECURITY_MANAGEMENT,
  },
];

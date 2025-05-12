import { FaUserGroup } from 'react-icons/fa6';
import {
  TbBadgesFilled,
  TbBinaryTree2Filled,
  TbUserFilled,
} from 'react-icons/tb';

import { ROUTES } from 'shared/const';

export const elements = [
  {
    title: 'Пользователи',
    icon: TbUserFilled,
    route: ROUTES.SETTINGS_USERS_MANAGEMENT_USERS,
  },
  {
    title: 'Должности',
    icon: TbBadgesFilled,
    route: ROUTES.SETTINGS_USERS_MANAGEMENT_JOB_TITLES,
  },
  {
    title: 'Отделы',
    icon: TbBinaryTree2Filled,
    route: ROUTES.SETTINGS_USERS_MANAGEMENT_DEPARTMENTS,
  },
  {
    title: 'Группы пользователей',
    icon: FaUserGroup,
    route: ROUTES.SETTINGS_USERS_MANAGEMENT_GROUPS,
  },
] as const;

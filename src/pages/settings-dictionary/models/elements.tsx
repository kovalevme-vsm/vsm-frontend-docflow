import {
  TbBuilding,
  TbFileFilled,
  TbShieldFilled,
  TbUserFilled,
} from 'react-icons/tb';

import { ROUTES } from 'shared/const';

export const dictionaryElements = [
  {
    title: 'Типы конфиденциальности',
    icon: TbShieldFilled,
    route: ROUTES.SETTINGS_DICTIONARY_CONFIDENTIALITY_LEVEL,
  },
  {
    title: 'Типы приложений',
    icon: TbFileFilled,
    route: ROUTES.SETTINGS_DICTIONARY_DOCUMENT_ATTACHMENT_TYPES,
  },
  {
    title: 'Внешние пользователи',
    icon: TbUserFilled,
    route: ROUTES.SETTINGS_DICTIONARY_EXTERNAL_PERSONS,
  },
  {
    title: 'Организации',
    icon: TbBuilding,
    route: ROUTES.SETTINGS_DICTIONARY_ORGANIZATIONS,
  },
  // {
  //   title: 'Типы приложений',
  //   icon: GoPaperclip,
  //   route: '',
  // },
] as const;

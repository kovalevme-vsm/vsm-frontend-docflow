import { TbFileFilled, TbShieldFilled } from 'react-icons/tb';

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
  // {
  //   title: 'Типы приложений',
  //   icon: GoPaperclip,
  //   route: '',
  // },
] as const;

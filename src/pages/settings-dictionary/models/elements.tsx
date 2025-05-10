import { TbShieldFilled } from 'react-icons/tb';

import { ROUTES } from 'shared/const';

export const dictionaryElements = [
  {
    title: 'Типы конфиденциальности',
    icon: TbShieldFilled,
    route: ROUTES.SETTINGS_DICTIONARY_CONFIDENTIALITY_LEVEL,
  },
  // {
  //   title: 'Типы приложений',
  //   icon: GoPaperclip,
  //   route: '',
  // },
] as const;

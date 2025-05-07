import { GoPaperclip } from 'react-icons/go';
import { TbShield } from 'react-icons/tb';

import { ROUTES } from 'shared/const';

export const dictionaryElements = [
  {
    code: 'confidentiality-level',
    title: 'Типы конфиденциальности',
    icon: TbShield,
    route: ROUTES.SETTINGS_DICTIONARY_CONFIDENTIALITY_LEVEL,
  },
  {
    code: 'document-attachment-types',
    title: 'Типы приложений',
    icon: GoPaperclip,
    route: '',
  },
] as const;

import { Recipient } from 'entities/recipient-select/ui/models/types';

import {
  dictionaryApiPath,
  dictionaryQueryKey,
  useApiQuery,
} from 'shared/lib/query';

export const useGetRecipientSelect = () => {
  return useApiQuery<Recipient[]>({
    apiPath: dictionaryApiPath.recipient,
    queryKey: dictionaryQueryKey.recipient(),
    placeholderData: [
      {
        id: String(Math.random()),
        name: 'Тони Олег Вильямсович',
      },
      {
        id: String(Math.random()),
        name: 'Заморников Илья Николаевич',
      },
    ],
  });
};

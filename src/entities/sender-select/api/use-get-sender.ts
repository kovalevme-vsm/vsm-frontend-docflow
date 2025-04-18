import { Sender } from 'entities/sender-select/models/types';

import {
  dictionaryApiPath,
  dictionaryQueryKey,
  useApiQuery,
} from 'shared/lib/query';

export const useGetSenderSelect = () => {
  return useApiQuery<Sender[]>({
    apiPath: dictionaryApiPath.sender,
    queryKey: dictionaryQueryKey.sender(),
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

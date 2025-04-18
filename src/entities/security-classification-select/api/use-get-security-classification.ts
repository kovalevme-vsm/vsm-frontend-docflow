import { SecurityClassification } from 'entities/security-classification-select/models/types';

import {
  dictionaryApiPath,
  dictionaryQueryKey,
  useApiQuery,
} from 'shared/lib/query';

export const useGetSecurityClassificationSelect = () => {
  return useApiQuery<SecurityClassification[]>({
    apiPath: dictionaryApiPath.securityClassification,
    queryKey: dictionaryQueryKey.securityClassification(),
    placeholderData: [
      {
        id: String(Math.random()),
        name: 'Конфиденциально',
      },
      {
        id: String(Math.random()),
        name: 'Коммерческая тайна',
      },
      {
        id: String(Math.random()),
        name: 'Для служебного пользования',
      },
    ],
  });
};

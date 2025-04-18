import { Organization } from 'entities/organization-select/models/types.ts';

import {
  dictionaryApiPath,
  dictionaryQueryKey,
  useApiQuery,
} from 'shared/lib/query';

export const useGetOrganizationsSelect = () => {
  return useApiQuery<Organization[]>({
    apiPath: dictionaryApiPath.organization,
    queryKey: dictionaryQueryKey.organization(),
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

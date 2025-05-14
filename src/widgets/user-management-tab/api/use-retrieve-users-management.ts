import { UserManagerType } from 'widgets/user-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useRetrieveUsersManagement = (id: string) => {
  return useApiQuery<UserManagerType>({
    apiPath: QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.paths.detail(id),
    queryKey: QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.keys.detail(id),
  });
};

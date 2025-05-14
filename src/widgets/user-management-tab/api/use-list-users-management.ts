import { useSearchParams } from 'react-router';

import { UserManagerType } from 'widgets/user-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useListUsersManagement = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<UserManagerType>>({
    apiPath: QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.paths.index,
    queryKey: [...QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.keys.list, ...[searchParams.toString()]],
    config: { params: searchParams },
  });
};

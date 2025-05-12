import { useSearchParams } from 'react-router';

import { SettingsUser } from 'pages/settings-users-management-users/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useUserManagementItemsList = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<SettingsUser>>({
    apiPath: QUERY_PATH.USER_MANAGEMENT_USER_LIST,
    queryKey: [
      ...QUERY_KEYS.USER_MANAGEMENT_USER_LIST(),
      ...(searchParams.size > 0 ? [searchParams.toString()] : []),
    ],
    config: { params: searchParams },
  });
};

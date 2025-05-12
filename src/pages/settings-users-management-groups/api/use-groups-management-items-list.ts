import { useSearchParams } from 'react-router';

import { SettingsGroups } from 'pages/settings-users-management-groups/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useGroupsManagementItemsList = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<SettingsGroups>>({
    apiPath: QUERY_PATH.USER_MANAGEMENT_GROUPS_LIST,
    queryKey: [
      ...QUERY_KEYS.USER_MANAGEMENT_GROUPS_LIST(),
      ...(searchParams.size > 0 ? [searchParams.toString()] : []),
    ],
    config: { params: searchParams },
  });
};

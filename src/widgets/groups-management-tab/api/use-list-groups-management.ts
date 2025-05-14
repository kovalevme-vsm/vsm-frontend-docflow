import { useSearchParams } from 'react-router';

import { GroupsManagerType } from 'widgets/groups-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useListGroupsManagement = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<GroupsManagerType>>({
    apiPath: QUERY.SYSTEM_SETTINGS_GROUPS_MANAGEMENT.paths.index,
    queryKey: [...QUERY.SYSTEM_SETTINGS_GROUPS_MANAGEMENT.keys.list, ...[searchParams.toString()]],
    config: { params: searchParams },
  });
};

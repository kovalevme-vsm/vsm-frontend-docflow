import { GroupsManagerType } from 'widgets/groups-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useRetrieveGroupsManagement = (id: string) => {
  return useApiQuery<GroupsManagerType>({
    apiPath: QUERY.SYSTEM_SETTINGS_GROUPS_MANAGEMENT.paths.detail(id),
    queryKey: QUERY.SYSTEM_SETTINGS_GROUPS_MANAGEMENT.keys.detail(id),
  });
};

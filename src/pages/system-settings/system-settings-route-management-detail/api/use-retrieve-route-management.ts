import { RouteData } from 'pages/system-settings/system-settings-route-management-detail/models/types.ts';

import { QUERY } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useRetrieveRouteManagement = (id: string = '') => {
  return useApiQuery<RouteData>({
    apiPath: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.paths.detail(id),
    queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.detail(id),
  });
};

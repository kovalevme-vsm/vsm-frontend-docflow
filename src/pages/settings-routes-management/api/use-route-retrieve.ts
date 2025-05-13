import { SettingsRouteStep } from 'pages/settings-routes-management/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useRouteRetrieve = (routeId: string | null) => {
  return useApiQuery<SettingsRouteStep>({
    apiPath: QUERY_PATH.ROUTE_MANAGEMENT_ROUTE_RETRIEVE(routeId || ''),
    queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTE_RETRIEVE(routeId || ''),
    enabled: !!routeId,
  });
};

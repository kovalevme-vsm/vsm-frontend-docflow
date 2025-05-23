import { useSearchParams } from 'react-router';

import { Route } from 'pages/system-settings/system-settings-route-management/models/types.ts';

import { QUERY } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useListRouteManagement = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<Route>>({
    apiPath: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.paths.index,
    queryKey: [...QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.list, ...[searchParams.toString()]],
    config: { params: searchParams },
  });
};

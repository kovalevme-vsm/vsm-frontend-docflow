import { useSearchParams } from 'react-router';

import { SettingsRoute } from 'pages/settings-routes-management/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useRouteManagementItemsList = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<SettingsRoute>>({
    apiPath: QUERY_PATH.ROUTE_MANAGEMENT_ROUTES_LIST,
    queryKey: [
      ...QUERY_KEYS.ROUTE_MANAGEMENT_ROUTES_LIST(),
      ...(searchParams.size > 0 ? [searchParams.toString()] : []),
    ],
    config: { params: searchParams },
  });
};

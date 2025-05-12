import { useSearchParams } from 'react-router';

import { SettingsRouteStep } from 'pages/settings-routes-management/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useStepRetrieve = (stepId: string | null) => {
  const [searchParams] = useSearchParams();
  return useApiQuery<SettingsRouteStep>({
    apiPath: QUERY_PATH.ROUTE_MANAGEMENT_ROUTE_STEP_RETRIEVE(stepId || ''),
    queryKey: [
      ...QUERY_KEYS.ROUTE_MANAGEMENT_ROUTE_STEP_RETRIEVE(stepId || ''),
      ...(searchParams.size > 0 ? [searchParams.toString()] : []),
    ],
    config: { params: searchParams },
    enabled: !!stepId,
  });
};

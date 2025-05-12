import { useSearchParams } from 'react-router';

import { SettingsDepartments } from 'pages/settings-users-management-departments/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useDepartmentsManagementItemsList = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<SettingsDepartments>>({
    apiPath: QUERY_PATH.USER_MANAGEMENT_DEPARTMENTS_LIST,
    queryKey: [
      ...QUERY_KEYS.USER_MANAGEMENT_DEPARTMENTS_LIST(),
      ...(searchParams.size > 0 ? [searchParams.toString()] : []),
    ],
    config: { params: searchParams },
  });
};

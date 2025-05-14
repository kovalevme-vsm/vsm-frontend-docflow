import { useSearchParams } from 'react-router';

import { DepartmentManagerType } from 'widgets/department-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useListDepartmentManagement = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<DepartmentManagerType>>({
    apiPath: QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.paths.index,
    queryKey: [...QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.keys.list, ...[searchParams.toString()]],
    config: { params: searchParams },
  });
};

import { DepartmentManagerType } from 'widgets/department-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useRetrieveDepartmentManagement = (id: string) => {
  return useApiQuery<DepartmentManagerType>({
    apiPath: QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.paths.detail(id),
    queryKey: QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.keys.detail(id),
  });
};

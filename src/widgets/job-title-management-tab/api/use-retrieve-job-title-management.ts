import { JobTitleManagerType } from 'widgets/job-title-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useRetrieveJobTitleManagement = (id: string) => {
  return useApiQuery<JobTitleManagerType>({
    apiPath: QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.paths.detail(id),
    queryKey: QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.keys.detail(id),
  });
};

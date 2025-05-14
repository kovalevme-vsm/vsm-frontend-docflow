import { useSearchParams } from 'react-router';

import { JobTitleManagerType } from 'widgets/job-title-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useListJobTitleManagement = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<JobTitleManagerType>>({
    apiPath: QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.paths.index,
    queryKey: [...QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.keys.list, ...[searchParams.toString()]],
    config: { params: searchParams },
  });
};

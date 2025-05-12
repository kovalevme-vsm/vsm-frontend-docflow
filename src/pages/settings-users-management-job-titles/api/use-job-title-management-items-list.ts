import { useSearchParams } from 'react-router';

import { SettingsJobTitles } from 'pages/settings-users-management-job-titles/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useJobTitleManagementItemsList = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<SettingsJobTitles>>({
    apiPath: QUERY_PATH.USER_MANAGEMENT_JOB_TITLE_LIST,
    queryKey: [
      ...QUERY_KEYS.USER_MANAGEMENT_JOB_TITLE_LIST(),
      ...(searchParams.size > 0 ? [searchParams.toString()] : []),
    ],
    config: { params: searchParams },
  });
};

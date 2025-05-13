import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useUserHeaderData = () => {
  return useApiQuery<{ full_name: string; job_title: string }>({
    apiPath: QUERY_PATH.USER_PAGE_HEADER_INFO,
    queryKey: QUERY_KEYS.USERS_PAGE_HEADER_INFO(),
    staleTime: 1,
  });
};

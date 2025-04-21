import { useApiQuery, userApiPath, usersQueryKey } from 'shared/lib/query';

export const useUserHeaderData = () => {
  return useApiQuery<{ full_name: string; job_title: string }>({
    apiPath: userApiPath.userPageHeaderInfo,
    queryKey: usersQueryKey.usersPageHeaderInfo(),
    staleTime: 1,
  });
};

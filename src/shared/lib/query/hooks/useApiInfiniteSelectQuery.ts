import { useInfiniteQuery } from '@tanstack/react-query';

import { apiClient } from 'shared/lib/axios';
import { DRFListPaginationResponse } from 'shared/lib/query';

type InfiniteQuery = {
  path: string;
  queryKey: string[];
  search?: string;
};

export const useApiInfiniteSelectQuery = ({
  path,
  queryKey,
  search,
}: InfiniteQuery) => {
  return useInfiniteQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey,
    queryFn: ({
      pageParam,
    }): Promise<DRFListPaginationResponse<{ value: string; label: string }>> =>
      apiClient
        .get(path, {
          params: {
            page: pageParam,
            for_select: true,
            ...(search && { ['search']: search }),
          },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
    staleTime: 1,
  });
};

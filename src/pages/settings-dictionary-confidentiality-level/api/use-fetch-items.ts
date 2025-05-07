import { useSearchParams } from 'react-router';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useFetchItems = () => {
  const [searchParams] = useSearchParams();
  return useApiQuery<
    DRFListPaginationResponse<{
      id: string;
      name: string;
      is_active: boolean;
      created_at: string;
    }>
  >({
    apiPath: QUERY_PATH.DICTIONARY('confidentiality-level'),
    queryKey:
      searchParams.size > 0
        ? [
            ...QUERY_KEYS.DICTIONARY('confidentiality-level'),
            searchParams.toString(),
          ]
        : QUERY_KEYS.DICTIONARY('confidentiality-level'),
    config: { params: searchParams },
  });
};

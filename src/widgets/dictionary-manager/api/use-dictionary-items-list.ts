import { useSearchParams } from 'react-router';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useDictionaryItemList = <T>(dictionaryKey: string) => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<T>>({
    apiPath: QUERY_PATH.DICTIONARY(dictionaryKey),
    queryKey: [
      ...QUERY_KEYS.DICTIONARY(dictionaryKey),
      ...(searchParams.size > 0 ? [searchParams.toString()] : []),
    ],
    config: { params: searchParams },
  });
};

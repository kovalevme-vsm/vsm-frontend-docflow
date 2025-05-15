import { useSearchParams } from 'react-router';

import { QUERY } from 'shared/const';
import { DRFListPaginationResponse, useApiQuery } from 'shared/lib/query';

export const useListDictionaryManagement = <T>(dictionary: string) => {
  const [searchParams] = useSearchParams();
  return useApiQuery<DRFListPaginationResponse<T>>({
    apiPath: QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.paths.index(dictionary),
    queryKey: [...QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.list(dictionary), ...[searchParams.toString()]],
    config: { params: searchParams },
  });
};

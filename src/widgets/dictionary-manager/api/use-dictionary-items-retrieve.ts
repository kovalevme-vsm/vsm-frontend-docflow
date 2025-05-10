import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useDictionaryItemsRetrieve = <T>(
  dictionaryKey: string,
  id: string | null
) => {
  return useApiQuery<T>({
    apiPath: QUERY_PATH.DICTIONARY_DETAIL(dictionaryKey, id || ''),
    queryKey: QUERY_KEYS.DICTIONARY_DETAIL(dictionaryKey, id || ''),
    enabled: !!id,
  });
};

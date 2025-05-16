import { QUERY } from 'shared/const';
import { useApiQuery } from 'shared/lib/query';

export const useRetrieveDictionaryManagement = <T>(dictionary: string, id: string) => {
  return useApiQuery<T>({
    apiPath: QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.paths.detail(dictionary, id),
    queryKey: QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.detail(dictionary, id),
  });
};

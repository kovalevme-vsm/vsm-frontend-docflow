import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useDictionaryItemUpdate = <T>(
  dictionaryKey: string,
  id: string | null
) => {
  const queryClient = useQueryClient();
  return useMutation<T, DRFErrorResponse, Omit<T, 'id'>>({
    mutationFn: (value) => {
      return apiClient.put(
        QUERY_PATH.DICTIONARY_DETAIL(dictionaryKey, id || ''),
        value
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.DICTIONARY(dictionaryKey),
      });
      message.success('Элемент успешно обновлен');
    },
  });
};

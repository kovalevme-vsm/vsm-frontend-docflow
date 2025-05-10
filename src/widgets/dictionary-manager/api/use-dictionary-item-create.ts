import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useDictionaryItemCreate = <T>(dictionaryKey: string) => {
  const queryClient = useQueryClient();
  return useMutation<T, DRFErrorResponse, Omit<T, 'id'>>({
    mutationFn: (value) => {
      return apiClient.post(QUERY_PATH.DICTIONARY(dictionaryKey), value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.DICTIONARY(dictionaryKey),
      });
      message.success('Элемент успешно создан');
    },
  });
};

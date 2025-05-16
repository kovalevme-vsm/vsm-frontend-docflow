import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useUpdateDictionaryManagement = <T>(dictionary: string, id: string) => {
  const queryClient = useQueryClient();
  return useMutation<T, AxiosError<DRFErrorResponse>, Omit<T, 'id' | 'created_at'>>({
    mutationFn: (variables) => {
      return apiClient.put(QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.paths.detail(dictionary, id), variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.list(dictionary) });
      queryClient.invalidateQueries({
        queryKey: QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.detail(dictionary, id),
      });
      notification.success({ message: 'Успешно', description: 'Элемент успешно обновлен' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};

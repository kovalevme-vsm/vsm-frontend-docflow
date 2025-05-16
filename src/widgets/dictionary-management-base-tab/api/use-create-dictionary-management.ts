import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateDictionaryManagement = <T>(dictionary: string) => {
  const queryClient = useQueryClient();
  return useMutation<T, AxiosError<DRFErrorResponse>, Omit<T, 'id' | 'created_at'>>({
    mutationFn: (variables) => {
      return apiClient.post(QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.paths.index(dictionary), variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.list(dictionary) });
      notification.success({ message: 'Успешно', description: 'Элемент успешно создан' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};

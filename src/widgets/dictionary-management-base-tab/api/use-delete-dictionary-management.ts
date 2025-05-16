import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useDeleteDictionaryManagement = (dictionary: string) => {
  const queryClient = useQueryClient();
  return useMutation<void, AxiosError<DRFErrorResponse>, { id: string }>({
    mutationFn: (variables) => {
      return apiClient.delete(QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.paths.detail(dictionary, variables.id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.list(dictionary),
      });
      notification.success({ message: 'Успешно', description: 'Элемент успешно удален' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};

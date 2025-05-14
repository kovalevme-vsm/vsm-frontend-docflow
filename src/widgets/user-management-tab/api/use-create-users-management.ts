import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { UserManagerType } from 'widgets/user-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateUsersManagement = () => {
  const queryClient = useQueryClient();
  return useMutation<UserManagerType, AxiosError<DRFErrorResponse>, Omit<UserManagerType, 'id' | 'last_login'>>({
    mutationFn: (variables) => {
      return apiClient.post(QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.paths.index, variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.keys.list });
      notification.success({ message: 'Успешно', description: 'Пользователь успешно создан' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};

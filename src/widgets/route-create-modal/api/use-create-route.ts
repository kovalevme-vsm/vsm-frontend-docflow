import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { RouteCreateFormValues } from 'widgets/route-create-modal/models/type.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateRoute = () => {
  const queryClient = useQueryClient();
  return useMutation<RouteCreateFormValues, AxiosError<DRFErrorResponse>, RouteCreateFormValues>({
    mutationFn: (variables) => {
      return apiClient.post(QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.paths.index, variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.list });
      notification.success({ message: 'Успешно', description: 'Шаблон маршрута успешно создан' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};

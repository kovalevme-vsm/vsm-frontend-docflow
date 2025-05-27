import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { RouteData } from 'pages/system-settings/system-settings-route-management-detail/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useUpdateRouteManagement = (id: string = '') => {
  const queryClient = useQueryClient();
  return useMutation<RouteData, AxiosError<DRFErrorResponse>, Omit<RouteData, 'id' | 'created_at'>>({
    mutationFn: (variables) => {
      return apiClient.put(QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.paths.detail(id), variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.list });
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.detail(id) });
      notification.success({ message: 'Успешно', description: 'Маршрут успешно обновлен' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};

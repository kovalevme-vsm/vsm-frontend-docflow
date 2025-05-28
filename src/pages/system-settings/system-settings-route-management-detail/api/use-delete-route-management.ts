import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

import { QUERY, ROUTES } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useDeleteRouteManagement = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<void, AxiosError<DRFErrorResponse>, { id?: string }>({
    mutationFn: ({ id = '' }) => {
      return apiClient.delete(QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.paths.detail(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.list });
      notification.success({ message: 'Успешно', description: 'Маршрут успешно удален' });
      navigate(ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT, { replace: true });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};

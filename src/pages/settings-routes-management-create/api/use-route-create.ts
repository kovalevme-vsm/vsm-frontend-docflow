import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router';

import { SettingsRoute } from 'pages/settings-routes-management/models/types.ts';

import { QUERY_KEYS, QUERY_PATH, ROUTES } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useRouteCreate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<
    AxiosResponse<SettingsRoute>,
    DRFErrorResponse,
    Omit<SettingsRoute, 'id' | 'created_at'>
  >({
    mutationFn: (value) => {
      return apiClient.post(QUERY_PATH.ROUTE_MANAGEMENT_ROUTES_CREATE, value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTES_LIST(),
      });
      message.success('Маршрут успешно добавлен');
      navigate(ROUTES.SETTINGS_ROUTES_MANAGEMENT, { replace: true });
    },
  });
};

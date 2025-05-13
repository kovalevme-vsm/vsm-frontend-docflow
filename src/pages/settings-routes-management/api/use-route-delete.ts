import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useRouteDelete = (routeId: string | null) => {
  const queryClient = useQueryClient();
  return useMutation<void, DRFErrorResponse, void>({
    mutationFn: () => {
      return apiClient.delete(
        QUERY_PATH.ROUTE_MANAGEMENT_ROUTE_DELETE(routeId || '')
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTES_LIST(),
      });
      message.success('Маршрут успешно удален');
    },
  });
};

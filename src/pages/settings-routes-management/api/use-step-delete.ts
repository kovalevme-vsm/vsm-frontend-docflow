import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useStepDelete = (id: string, routeId: string | null) => {
  const queryClient = useQueryClient();
  return useMutation<void, DRFErrorResponse, void>({
    mutationFn: () => {
      return apiClient.delete(
        QUERY_PATH.ROUTE_MANAGEMENT_ROUTE_STEP_DELETE(id)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTE_STEPS_LIST(routeId || ''),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTES_LIST(),
      });
      message.success('Шаг успешно удален');
    },
  });
};

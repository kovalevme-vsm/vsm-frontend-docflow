import { useMutation, useQueryClient } from '@tanstack/react-query';

import { apiClient } from 'shared/lib/axios';
import { routeApiPath, routeQueryKey } from 'shared/lib/query';

export const useRouteTemplateDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return apiClient.delete(routeApiPath.routeTemplateDelete(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: routeQueryKey.routeTemplateList(),
      });
    },
  });
};

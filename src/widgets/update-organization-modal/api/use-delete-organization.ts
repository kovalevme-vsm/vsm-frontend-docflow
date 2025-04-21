import { useMutation, useQueryClient } from '@tanstack/react-query';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

export const useDeleteOrganization = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return apiClient.delete(dictionaryApiPath.organizationDetail(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: dictionaryQueryKey.organization(),
      });
    },
  });
};

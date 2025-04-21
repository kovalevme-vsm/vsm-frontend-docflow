import { useMutation, useQueryClient } from '@tanstack/react-query';

import { OrganizationUpdateFormValue } from 'widgets/update-organization-modal/types.ts';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

export const useUpdateOrganization = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value: OrganizationUpdateFormValue) => {
      return apiClient.put(dictionaryApiPath.organizationDetail(id), value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: dictionaryQueryKey.organization(),
      });
    },
  });
};

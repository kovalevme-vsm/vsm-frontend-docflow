import { useMutation, useQueryClient } from '@tanstack/react-query';

import { OrganizationCreateFormValue } from 'widgets/create-organization-modal/types.ts';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

export const useCreateOrganization = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value: OrganizationCreateFormValue) => {
      return apiClient.post(dictionaryApiPath.organization, value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: dictionaryQueryKey.organization(),
      });
    },
  });
};

import { useMutation } from '@tanstack/react-query';

import { QUERY_PATH } from 'shared/const';
import { apiClient } from 'shared/lib/axios';

export const useCreateItem = () => {
  return useMutation({
    mutationFn: (values) => {
      return apiClient.post(
        QUERY_PATH.DICTIONARY('confidentiality-level'),
        values
      );
    },
  });
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { QUERY_KEYS, QUERY_PATH, ROUTES } from 'shared/const';
import { apiClient } from 'shared/lib/axios';

export const useSignOutMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return apiClient.post(QUERY_PATH.USER_AUTH_SIGN_OUT);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USERS_AUTH_TOKEN_VALIDATE(),
      });
      sessionStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate(ROUTES.LOGIN);
    },
  });
};

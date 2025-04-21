import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { ROUTES } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { userApiPath } from 'shared/lib/query';

export const useSignOutMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => {
      return apiClient.post(userApiPath.userAuthenticateLogout);
    },
    onSuccess: () => {
      sessionStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate(ROUTES.LOGIN);
    },
  });
};

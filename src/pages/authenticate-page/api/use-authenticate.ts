import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import {
  AuthenticateFormValue,
  AuthenticateResponse,
} from 'pages/authenticate-page/types';

import { ROUTES } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse, userApiPath } from 'shared/lib/query';

export const useUserAuthenticateMutation = () => {
  const navigate = useNavigate();
  return useMutation<
    AuthenticateResponse,
    DRFErrorResponse,
    AuthenticateFormValue
  >({
    mutationFn: (value: AuthenticateFormValue) => {
      return apiClient.post(userApiPath.userAuthenticateLogin, value);
    },
    onSuccess: (value) => {
      sessionStorage.setItem('accessToken', value.data.access);
      localStorage.setItem('refreshToken', value.data.refresh);
      navigate(ROUTES.DASHBOARD);
    },
  });
};

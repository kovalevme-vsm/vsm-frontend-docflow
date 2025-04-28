import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { RouteCreateFormValue } from 'pages/settings-routes-create-page/models/types.ts';

import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse, routeApiPath } from 'shared/lib/query';

export const useRouteCreate = () => {
  const navigate = useNavigate();
  return useMutation<void, DRFErrorResponse, RouteCreateFormValue>({
    mutationFn: (value: RouteCreateFormValue) => {
      return apiClient.post(routeApiPath.routeCreate, value);
    },
    onSuccess: () => {
      navigate(-1);
    },
  });
};

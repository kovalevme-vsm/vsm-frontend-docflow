import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { RouteCreateFormValue } from 'pages/settings-routes-create-page/models/types.ts';

import { ROUTES } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse, routeApiPath } from 'shared/lib/query';

export const useRouteCreate = () => {
  const navigate = useNavigate();
  return useMutation<void, DRFErrorResponse, RouteCreateFormValue>({
    mutationFn: (value: RouteCreateFormValue) => {
      return apiClient.post(routeApiPath.routeTemplateCreate, value);
    },
    onSuccess: () => {
      navigate(ROUTES.SETTINGS_ROUTES, { replace: true });
    },
  });
};

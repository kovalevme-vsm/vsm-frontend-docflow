import {
  DRFListPaginationResponse,
  routeApiPath,
  routeQueryKey,
  useApiQuery,
} from 'shared/lib/query';

export const useRouteTemplateList = () => {
  return useApiQuery<
    DRFListPaginationResponse<{
      id: string;
      name: string;
      is_active: boolean;
      create_at: string;
      document_type_label: string;
    }>
  >({
    apiPath: routeApiPath.routeTemplateList,
    queryKey: routeQueryKey.routeTemplateList(),
    staleTime: 1,
  });
};

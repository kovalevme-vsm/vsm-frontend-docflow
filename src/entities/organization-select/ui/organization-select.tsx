import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { apiClient } from 'shared/lib/axios';
import {
  dictionaryApiPath,
  dictionaryQueryKey,
  DRFListPaginationResponse,
  useApiQuery,
} from 'shared/lib/query';

export function OrganizationSelect(): ReactElement {
  const addOrganization = async (name: string) => {
    const response = await apiClient.post(dictionaryApiPath.organization, {
      name,
      inn_number: 'Не указано',
      kpp_number: 'Не указано',
      is_active: true,
    });
    return response.data;
  };

  const { data, isPending } = useApiQuery<
    DRFListPaginationResponse<{ value: string; label: string }>
  >({
    apiPath: dictionaryApiPath.organizationSelect,
    queryKey: dictionaryQueryKey.organizationSelect(),
    staleTime: 1,
  });

  return (
    <SelectWithAddItem
      placeholder={'Выберите организацию'}
      allowClear
      items={data?.results}
      loading={isPending}
      onAddItem={addOrganization}
      queryKey={dictionaryQueryKey.organizationSelect()}
    />
  );
}

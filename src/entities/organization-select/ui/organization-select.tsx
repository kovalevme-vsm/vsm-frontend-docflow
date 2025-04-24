import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type OrganizationSelectProps = {
  enabledFastCreate?: boolean;
};

export function OrganizationSelect({
  enabledFastCreate = true,
}: OrganizationSelectProps): ReactElement {
  const addOrganization = async (name: string) => {
    const response = await apiClient.post(dictionaryApiPath.organization, {
      name,
      inn_number: 'Не указано',
      kpp_number: 'Не указано',
      is_active: true,
    });
    return response.data;
  };

  return (
    <SelectWithAddItem
      placeholder={'Выберите организацию'}
      allowClear
      showSearch={true}
      filterOption={false}
      onAddItem={enabledFastCreate ? addOrganization : undefined}
      queryKey={dictionaryQueryKey.organizationSelect()}
      path={dictionaryApiPath.organization}
    />
  );
}

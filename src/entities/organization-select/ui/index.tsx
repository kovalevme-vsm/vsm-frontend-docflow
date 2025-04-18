import { Select } from 'antd';
import { ReactElement } from 'react';

import { useGetOrganizationsSelect } from 'entities/organization-select/api/use-get-organizations.ts';

export function OrganizationSelect(): ReactElement {
  const { data, isPending } = useGetOrganizationsSelect();
  return (
    <Select
      fieldNames={{
        label: 'name',
        value: 'id',
      }}
      loading={isPending}
      options={data}
      allowClear
      placeholder={'Организация'}
    />
  );
}

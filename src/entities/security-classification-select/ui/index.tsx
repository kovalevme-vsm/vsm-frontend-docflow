import { Select } from 'antd';
import { ReactElement } from 'react';

import { useGetSecurityClassificationSelect } from 'entities/security-classification-select/api/use-get-security-classification.ts';

export function SecurityClassificationSelect(): ReactElement {
  const { data, isPending } = useGetSecurityClassificationSelect();
  return (
    <Select
      fieldNames={{
        label: 'name',
        value: 'id',
      }}
      loading={isPending}
      options={data}
      allowClear
      placeholder={'Гриф'}
    />
  );
}

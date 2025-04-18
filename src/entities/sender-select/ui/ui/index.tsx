import { Select } from 'antd';
import { ReactElement } from 'react';

import { useGetRecipientSelect } from 'entities/recipient-select/ui/api/use-get-recipient';

export function RecipientSelect(): ReactElement {
  const { data, isPending } = useGetRecipientSelect();
  return (
    <Select
      fieldNames={{
        label: 'name',
        value: 'id',
      }}
      loading={isPending}
      options={data}
      allowClear
      placeholder={'Получатель'}
    />
  );
}

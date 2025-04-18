import { Select } from 'antd';
import { ReactElement } from 'react';

import { useGetSenderSelect } from 'entities/sender-select/api/use-get-sender';

export function SenderSelect(): ReactElement {
  const { data, isPending } = useGetSenderSelect();
  return (
    <Select
      fieldNames={{
        label: 'name',
        value: 'id',
      }}
      loading={isPending}
      options={data}
      allowClear
      placeholder={'Отправитель'}
    />
  );
}

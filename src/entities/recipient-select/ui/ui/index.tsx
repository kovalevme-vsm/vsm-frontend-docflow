import { ReactElement } from 'react';

import { EmptyLightly } from 'components/ui/empty';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/ui/select';

import { useGetRecipientSelect } from 'entities/recipient-select/ui/api/use-get-recipient';

export function RecipientSelect(): ReactElement {
  const { data } = useGetRecipientSelect();
  return (
    <Select>
      <SelectTrigger className={'w-full'}>
        <SelectValue placeholder={'Адресат'} />
      </SelectTrigger>
      <SelectContent>
        {data?.map((value) => (
          <SelectItem value={value.id}>{value.name}</SelectItem>
        ))}
        {!data?.length && <EmptyLightly />}
      </SelectContent>
    </Select>
  );
}

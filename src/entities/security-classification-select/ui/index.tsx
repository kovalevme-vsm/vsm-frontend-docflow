import { ReactElement } from 'react';

import { EmptyLightly } from 'components/ui/empty';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/ui/select.tsx';

import { useGetSecurityClassificationSelect } from 'entities/security-classification-select/api/use-get-security-classification.ts';

export function SecurityClassificationSelect(): ReactElement {
  const { data } = useGetSecurityClassificationSelect();
  return (
    <Select>
      <SelectTrigger className={'w-full'}>
        <SelectValue placeholder={'Гриф'} />
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

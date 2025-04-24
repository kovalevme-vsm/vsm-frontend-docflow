import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

export function PersonsRoleSelect(): ReactElement {
  return (
    <SelectWithAddItem
      allowClear
      showSearch={true}
      filterOption={false}
      queryKey={dictionaryQueryKey.personsRoleSelect()}
      path={dictionaryApiPath.personsRole}
    />
  );
}

import { ReactElement } from 'react';

import { useListGroupsManagement } from 'widgets/groups-management-tab/api/use-list-groups-management.ts';
import { TABLE_COLUMNS } from 'widgets/groups-management-tab/models/table-columns.tsx';

import { Search, Table } from 'shared/ui';

export function GroupsManagementTab(): ReactElement {
  const { data: groupsManagementList, isPending: isPendingGroups } = useListGroupsManagement();

  return (
    <div className={'space-y-4'}>
      <Search />
      <Table
        columns={TABLE_COLUMNS}
        loading={isPendingGroups}
        dataSource={groupsManagementList?.results}
        total={groupsManagementList?.count}
      />
    </div>
  );
}

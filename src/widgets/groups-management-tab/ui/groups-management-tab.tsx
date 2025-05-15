import { ReactElement } from 'react';
import { IoIosWarning } from 'react-icons/io';

import { useListGroupsManagement } from 'widgets/groups-management-tab/api/use-list-groups-management.ts';
import { TABLE_COLUMNS } from 'widgets/groups-management-tab/models/table-columns.tsx';

import { Search, Table } from 'shared/ui';

export function GroupsManagementTab(): ReactElement {
  const { data: groupsManagementList, isPending: isPendingGroups } = useListGroupsManagement();

  return (
    <div className={'space-y-4'}>
      <Search />
      <span className={'flex items-center gap-2 text-sm font-medium text-yellow-500'}>
        <IoIosWarning className={'text-lg'} />
        Список системных групп пользователей, которые невозможно создать и отредактировать.
      </span>
      <Table
        columns={TABLE_COLUMNS}
        loading={isPendingGroups}
        dataSource={groupsManagementList?.results}
        total={groupsManagementList?.count}
      />
    </div>
  );
}

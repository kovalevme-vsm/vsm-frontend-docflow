import { ReactElement } from 'react';

import { useListDepartmentManagement } from 'widgets/department-management-tab/api/use-list-department-management';
import { TABLE_COLUMNS } from 'widgets/department-management-tab/models/table-columns';

import { Search, Table } from 'shared/ui';

export function DepartmentManagementTab(): ReactElement {
  const { data: departmentManagementList, isPending: isPendingDepartment } = useListDepartmentManagement();

  return (
    <div className={'space-y-4'}>
      <Search />
      <Table
        columns={TABLE_COLUMNS}
        loading={isPendingDepartment}
        dataSource={departmentManagementList?.results}
        total={departmentManagementList?.count}
      />
    </div>
  );
}

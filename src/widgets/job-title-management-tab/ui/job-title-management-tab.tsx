import { ReactElement } from 'react';

import { useListJobTitleManagement } from 'widgets/job-title-management-tab/api/use-list-job-title-management.ts';
import { TABLE_COLUMNS } from 'widgets/job-title-management-tab/models/table-columns.tsx';

import { Search, Table } from 'shared/ui';

export function JobTitleManagementTab(): ReactElement {
  const { data: jobTitleManagementList, isPending: isPendingJobTitle } = useListJobTitleManagement();

  return (
    <div className={'space-y-4'}>
      <Search />
      <Table
        columns={TABLE_COLUMNS}
        loading={isPendingJobTitle}
        dataSource={jobTitleManagementList?.results}
        total={jobTitleManagementList?.count}
      />
    </div>
  );
}

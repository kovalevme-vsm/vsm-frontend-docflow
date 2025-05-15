import { Button } from 'antd';
import { ReactElement } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useDepartmentManagementCreateModal } from 'widgets/department-management-tab/models/hooks.ts';
import { useListJobTitleManagement } from 'widgets/job-title-management-tab/api/use-list-job-title-management.ts';
import { useJobTitleManagementEditModal } from 'widgets/job-title-management-tab/models/hooks.ts';
import { TABLE_COLUMNS } from 'widgets/job-title-management-tab/models/table-columns.tsx';
import { JobTitleManagementCreate } from 'widgets/job-title-management-tab/ui/job-title-management-create.tsx';
import { JobTitleManagementUpdate } from 'widgets/job-title-management-tab/ui/job-title-management-update.tsx';

import { Search, Table } from 'shared/ui';

export function JobTitleManagementTab(): ReactElement {
  const { data: jobTitleManagementList, isPending: isPendingJobTitle } = useListJobTitleManagement();
  const { handleCloseCreateModal, handleOpenCreateModal, createModalActive } = useDepartmentManagementCreateModal();
  const { jobTitleEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal } =
    useJobTitleManagementEditModal();

  return (
    <div className={'space-y-4'}>
      <div className={'flex flex-col gap-2 lg:flex-row'}>
        <Search />
        <Button icon={<AiOutlineUsergroupAdd />} type={'primary'} onClick={handleOpenCreateModal}>
          Создать должность
        </Button>
      </div>
      <Table
        columns={TABLE_COLUMNS(handleOpenUpdateModal)}
        loading={isPendingJobTitle}
        dataSource={jobTitleManagementList?.results}
        total={jobTitleManagementList?.count}
      />
      <JobTitleManagementCreate isOpen={createModalActive} onCloseModal={handleCloseCreateModal} />
      {jobTitleEditId && (
        <JobTitleManagementUpdate
          isOpen={updateModalActive}
          onCloseModal={handleCloseUpdateModal}
          userEditId={jobTitleEditId}
        />
      )}
    </div>
  );
}

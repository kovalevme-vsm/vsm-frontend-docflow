import { Button } from 'antd';
import { ReactElement } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useListDepartmentManagement } from 'widgets/department-management-tab/api/use-list-department-management';
import {
  useDepartmentManagementCreateModal,
  useDepartmentManagementEditModal,
} from 'widgets/department-management-tab/models/hooks.ts';
import { TABLE_COLUMNS } from 'widgets/department-management-tab/models/table-columns';
import { DepartmentManagementCreate } from 'widgets/department-management-tab/ui/department-management-create.tsx';
import { DepartmentManagementUpdate } from 'widgets/department-management-tab/ui/department-management-update.tsx';

import { Search, Table } from 'shared/ui';

export function DepartmentManagementTab(): ReactElement {
  const { data: departmentManagementList, isPending: isPendingDepartment } = useListDepartmentManagement();
  const { handleCloseCreateModal, handleOpenCreateModal, createModalActive } = useDepartmentManagementCreateModal();
  const { departmentEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal } =
    useDepartmentManagementEditModal();

  return (
    <div className={'space-y-4'}>
      <div className={'flex flex-col gap-2 lg:flex-row'}>
        <Search />
        <Button icon={<AiOutlineUsergroupAdd />} type={'primary'} onClick={handleOpenCreateModal}>
          Создать отдел
        </Button>
      </div>
      <Table
        columns={TABLE_COLUMNS(handleOpenUpdateModal)}
        loading={isPendingDepartment}
        dataSource={departmentManagementList?.results}
        total={departmentManagementList?.count}
      />
      <DepartmentManagementCreate isOpen={createModalActive} onCloseModal={handleCloseCreateModal} />
      {departmentEditId && (
        <DepartmentManagementUpdate
          isOpen={updateModalActive}
          onCloseModal={handleCloseUpdateModal}
          userEditId={departmentEditId}
        />
      )}
    </div>
  );
}

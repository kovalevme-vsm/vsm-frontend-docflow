import { Button } from 'antd';
import { ReactElement } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import { useDepartmentManagementCreateModal } from 'widgets/department-management-tab/models/hooks.ts';
import { useListGroupsManagement } from 'widgets/groups-management-tab/api/use-list-groups-management.ts';
import { useGroupsManagementEditModal } from 'widgets/groups-management-tab/models/hooks.ts';
import { TABLE_COLUMNS } from 'widgets/groups-management-tab/models/table-columns.tsx';
import { GroupsManagementUpdate } from 'widgets/groups-management-tab/ui/department-groups-update.tsx';
import { GroupsManagementCreate } from 'widgets/groups-management-tab/ui/department-management-create.tsx';

import { Search, Table } from 'shared/ui';

export function GroupsManagementTab(): ReactElement {
  const { data: groupsManagementList, isPending: isPendingGroups } = useListGroupsManagement();
  const { handleCloseCreateModal, handleOpenCreateModal, createModalActive } = useDepartmentManagementCreateModal();
  const { groupsEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal } =
    useGroupsManagementEditModal();
  return (
    <div className={'space-y-4'}>
      <div className={'flex flex-col gap-2 lg:flex-row'}>
        <Search />
        <Button icon={<AiOutlineUsergroupAdd />} type={'primary'} onClick={handleOpenCreateModal}>
          Создать группу
        </Button>
      </div>
      <Table
        columns={TABLE_COLUMNS(handleOpenUpdateModal)}
        loading={isPendingGroups}
        dataSource={groupsManagementList?.results}
        total={groupsManagementList?.count}
      />
      <GroupsManagementCreate isOpen={createModalActive} onCloseModal={handleCloseCreateModal} />
      {groupsEditId && (
        <GroupsManagementUpdate
          isOpen={updateModalActive}
          onCloseModal={handleCloseUpdateModal}
          userEditId={groupsEditId}
        />
      )}
    </div>
  );
}

import { Button } from 'antd';
import { ReactElement, useCallback, useState } from 'react';
import { TbUserPlus } from 'react-icons/tb';

import { useListUsersManagement } from 'widgets/user-management-tab/api/use-list-users-management.ts';
import { TABLE_COLUMNS } from 'widgets/user-management-tab/models/table-columns';
import { UserManagementCreate } from 'widgets/user-management-tab/ui/user-management-create.tsx';

import { Search, Table } from 'shared/ui';

export function UserManagementTab(): ReactElement {
  const { data: userManagementList, isPending: isPendingUsers } = useListUsersManagement();
  const [createModalActive, setCreateModalActive] = useState<boolean>(false);

  const handleOpenCreateModal = useCallback(() => setCreateModalActive(true), []);
  const handleCloseCreateModal = useCallback(() => setCreateModalActive(false), []);

  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <Search />
        <Button icon={<TbUserPlus />} type={'primary'} onClick={handleOpenCreateModal}>
          Создать локального пользователя
        </Button>
      </div>
      <Table
        columns={TABLE_COLUMNS}
        loading={isPendingUsers}
        dataSource={userManagementList?.results}
        total={userManagementList?.count}
      />
      <UserManagementCreate isOpen={createModalActive} onClose={handleCloseCreateModal} />
    </div>
  );
}

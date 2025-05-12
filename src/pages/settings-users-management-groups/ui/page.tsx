import { ReactElement } from 'react';
import { FaUserGroup } from 'react-icons/fa6';
import { TbChevronLeft } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { useGroupsManagementItemsList } from 'pages/settings-users-management-groups/api/use-groups-management-items-list.ts';

import { PageHeader } from 'widgets/page-header';

import { IconButton, Table } from 'shared/ui';

export function SettingsUsersManagementGroups(): ReactElement {
  const navigate = useNavigate();
  const { data, isPending } = useGroupsManagementItemsList();
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={FaUserGroup} title={'Группы пользователей'} />
      </div>
      <Table
        dataSource={data?.results}
        loading={isPending}
        total={data?.count}
        columns={[
          {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
          },
        ]}
      />
    </div>
  );
}

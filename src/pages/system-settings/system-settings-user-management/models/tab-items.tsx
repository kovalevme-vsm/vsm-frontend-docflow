import { DepartmentManagementTab } from 'widgets/department-management-tab';
import { GroupsManagementTab } from 'widgets/groups-management-tab';
import { JobTitleManagementTab } from 'widgets/job-title-management-tab';
import { UserManagementTab } from 'widgets/user-management-tab';

export const TAB_ITEMS = [
  {
    label: `Пользователи`,
    key: 'users',
    children: <UserManagementTab />,
  },
  {
    label: `Отделы`,
    key: 'departments',
    children: <DepartmentManagementTab />,
  },
  {
    label: `Должности`,
    key: 'job_titles',
    children: <JobTitleManagementTab />,
  },
  {
    label: `Группы`,
    key: 'group',
    children: <GroupsManagementTab />,
  },
];

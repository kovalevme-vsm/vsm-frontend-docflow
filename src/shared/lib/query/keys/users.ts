export const usersQueryKey = {
  all: ['users'],
  usersPageHeaderInfo: () => [...usersQueryKey.all, 'page-header-info'],
  userManagementList: () => [...usersQueryKey.all, 'user-management-list'],
};

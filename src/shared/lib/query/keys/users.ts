export const usersQueryKey = {
  all: ['users'],
  usersPageHeaderInfo: () => [...usersQueryKey.all, 'page-header-info'],
};

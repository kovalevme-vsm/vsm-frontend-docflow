export const QUERY_KEYS = {
  //   USERS
  USERS_BASE: ['users'],
  USERS_AUTH_TOKEN_VALIDATE: () => [
    ...QUERY_KEYS.USERS_BASE,
    'auth-token-validate',
  ],
  USERS_PAGE_HEADER_INFO: () => [...QUERY_KEYS.USERS_BASE, 'page-header-info'],

  //   DICTIONARY
  DICTIONARY_BASE: ['dictionary'],
  DICTIONARY: (dictionaryName: string) => [
    ...QUERY_KEYS.DICTIONARY_BASE,
    dictionaryName,
  ],
  DICTIONARY_DETAIL: (dictionaryName: string, id: string) => [
    ...QUERY_KEYS.DICTIONARY_BASE,
    dictionaryName,
    id,
  ],
  //   USERS MANAGEMENT
  USER_MANAGEMENT_BASE: ['users-management'],
  USER_MANAGEMENT_USER_LIST: () => [
    ...QUERY_KEYS.USER_MANAGEMENT_BASE,
    'user-list',
  ],
  USER_MANAGEMENT_USER_DETAIL: (userId: string) => [
    ...QUERY_KEYS.USER_MANAGEMENT_BASE,
    'user-detail',
    userId,
  ],
  USER_MANAGEMENT_JOB_TITLE_LIST: () => [
    ...QUERY_KEYS.USER_MANAGEMENT_BASE,
    'job-title-list',
  ],
  USER_MANAGEMENT_DEPARTMENTS_LIST: () => [
    ...QUERY_KEYS.USER_MANAGEMENT_BASE,
    'departments-list',
  ],
  USER_MANAGEMENT_GROUPS_LIST: () => [
    ...QUERY_KEYS.USER_MANAGEMENT_BASE,
    'groups-list',
  ],

  //   ROUTE MANAGEMENT
  ROUTE_MANAGEMENT_BASE: ['route-management'],
  ROUTE_MANAGEMENT_ROUTES_LIST: () => [
    ...QUERY_KEYS.USER_MANAGEMENT_BASE,
    'routes-list',
  ],
  ROUTE_MANAGEMENT_ROUTE_STEPS_LIST: (routeId: string) => [
    ...QUERY_KEYS.USER_MANAGEMENT_BASE,
    'routes',
    routeId,
    'steps-list',
  ],
  ROUTE_MANAGEMENT_ROUTE_STEP_RETRIEVE: (stepId: string) => [
    ...QUERY_KEYS.USER_MANAGEMENT_BASE,
    'routes',
    'step',
    stepId,
  ],
};

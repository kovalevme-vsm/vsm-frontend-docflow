export const QUERY_PATH = {
  //   USERS
  USER_AUTH_SIGN_IN: 'users/auth/login',
  USER_AUTH_SIGN_OUT: 'users/auth/logout',
  USER_AUTH_TOKEN_VALIDATE: 'users/auth/token/validate',
  USER_PAGE_HEADER_INFO: 'users/page-header-info',

  //  DICTIONARY
  DICTIONARY: (dictionaryName?: string) => `dictionary/${dictionaryName}`,
  DICTIONARY_DETAIL: (dictionaryName: string, id: string) =>
    `dictionary/${dictionaryName}/${id}`,

  //   USERS MANAGEMENT
  USER_MANAGEMENT_USER_LIST: 'users/management',
  USER_MANAGEMENT_USER_CREATE: 'users/management',
  USER_MANAGEMENT_USER_RETRIEVE: (userId: string) =>
    `users/management/${userId}`,
  USER_MANAGEMENT_USER_UPDATE: (userId: string) => `users/management/${userId}`,
  USER_MANAGEMENT_USER_DELETE: (userId: string) => `users/management/${userId}`,

  USER_MANAGEMENT_JOB_TITLE_LIST: 'users/job-titles',
  USER_MANAGEMENT_DEPARTMENTS_LIST: 'users/departments',
  USER_MANAGEMENT_GROUPS_LIST: 'users/groups',

  //   ROUTE MANAGEMENT
  ROUTE_MANAGEMENT_ROUTES_LIST: 'routes/template',
  ROUTE_MANAGEMENT_ROUTE_STEPS_LIST: (routeId: string) =>
    `routes/template/${routeId}/steps`,
  ROUTE_MANAGEMENT_ROUTE_STEP_RETRIEVE: (stepId: string) =>
    `routes/template/managed/step/${stepId}`,
  ROUTE_MANAGEMENT_ROUTE_STEP_UPDATE: (stepId: string) =>
    `routes/template/managed/step/${stepId}`,
  ROUTE_MANAGEMENT_ROUTE_STEP_DELETE: (stepId: string) =>
    `routes/template/managed/step/${stepId}`,
  ROUTE_MANAGEMENT_ROUTE_STEP_CREATE: `routes/template/managed/step`,
};

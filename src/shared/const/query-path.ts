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
};

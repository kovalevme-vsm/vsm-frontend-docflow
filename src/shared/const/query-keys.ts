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
};

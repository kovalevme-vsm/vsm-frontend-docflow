export const ROUTES = {
  LOGIN: '/sign-in',
  DASHBOARD: '/',

  // Documents
  DOCUMENTS_BASE: '/documents',
  DOCUMENTS_INCOMING: '/documents/incoming',
  DOCUMENTS_INCOMING_CREATE: '/documents/incoming/create',

  SETTINGS_BASE: '/settings',
  SETTINGS_DICTIONARY: '/settings/dictionaries',
  SETTINGS_DICTIONARY_LIST: (dictionaryType: string) =>
    `/settings/dictionaries/${dictionaryType}`,
  SETTINGS_ROUTES: '/settings/routes',
  // Fallback route
  NOT_FOUND: '*',
} as const;

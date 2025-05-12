export const ROUTES = {
  LOGIN: '/sign-in',
  DASHBOARD: '/',

  DOCUMENTS_BASE: '/documents',
  DOCUMENTS_INCOMING: '/documents/incoming',
  DOCUMENTS_OUTGOING: '/documents/outgoing',
  DOCUMENTS_CONTRACT: '/documents/contracts',

  SETTINGS_BASE: '/settings',
  SETTINGS_DICTIONARY: '/settings/dictionaries',
  SETTINGS_DICTIONARY_CONFIDENTIALITY_LEVEL: `/settings/dictionaries/confidentiality-level`,
  SETTINGS_DICTIONARY_DOCUMENT_ATTACHMENT_TYPES: `/settings/dictionaries/document-attachment-types`,
  SETTINGS_DICTIONARY_EXTERNAL_PERSONS: `/settings/dictionaries/external-persons`,
  SETTINGS_DICTIONARY_ORGANIZATIONS: `/settings/dictionaries/organizations`,
  SETTINGS_DICTIONARY_STATUSES: `/settings/dictionaries/statuses`,

  SETTINGS_USERS_MANAGEMENT: '/settings/users-management',
  SETTINGS_USERS_MANAGEMENT_USERS: '/settings/users-management/users',
  SETTINGS_USERS_MANAGEMENT_JOB_TITLES: '/settings/users-management/job-titles',
  SETTINGS_USERS_MANAGEMENT_DEPARTMENTS:
    '/settings/users-management/departments',
  SETTINGS_USERS_MANAGEMENT_GROUPS: '/settings/users-management/groups',

  SETTINGS_ROUTES_MANAGEMENT: '/settings/routes-management',

  // Fallback route
  NOT_FOUND: '*',
} as const;

export const ROUTES = {
  LOGIN: '/sign-in',
  DASHBOARD: '/',

  SETTINGS_BASE: '/settings',
  SETTINGS_DICTIONARY: '/settings/dictionaries',
  SETTINGS_DICTIONARY_CONFIDENTIALITY_LEVEL: `/settings/dictionaries/confidentiality-level`,
  SETTINGS_DICTIONARY_DOCUMENT_ATTACHMENT_TYPES: `/settings/dictionaries/document-attachment-types`,
  // Fallback route
  NOT_FOUND: '*',
} as const;

export const ROUTES = {
  // Auth routes
  LOGIN: '/sign-in',
  DASHBOARD: '/',

  // Documents
  DOCUMENTS_BASE: '/documents',
  DOCUMENTS_INCOMING: '/documents/incoming',
  DOCUMENTS_INCOMING_CREATE: '/documents/incoming/create',
  DOCUMENTS_OUTGOING: '/documents/outgoing',

  // Fallback route
  NOT_FOUND: '*',
} as const;

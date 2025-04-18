export const ROUTES = {
  // Auth routes
  LOGIN: '/sign-in',
  DASHBOARD: '/',

  // Documents
  DOCUMENTS_BASE: '/documents',
  DOCUMENTS_INCOMING: '/documents/incoming',
  DOCUMENTS_INCOMING_CREATE: '/documents/incoming/create',

  // Fallback route
  NOT_FOUND: '*',
} as const;

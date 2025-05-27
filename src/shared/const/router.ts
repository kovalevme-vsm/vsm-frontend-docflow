const SYSTEM_SETTINGS = {
  SYSTEM_SETTINGS: '/system-settings',
  SYSTEM_SETTINGS_GENERAL: '/system-settings/general',
  SYSTEM_SETTINGS_DICTIONARY: '/system-settings/dictionary-management',
  SYSTEM_SETTINGS_USER_MANAGEMENT: '/system-settings/user-management',
  SYSTEM_SETTINGS_ROUTE_MANAGEMENT: '/system-settings/route-management',
  SYSTEM_SETTINGS_ROUTE_MANAGEMENT_DETAIL: (id: string) => `/system-settings/route-management/${id}`,
  SYSTEM_SETTINGS_INTEGRATION_MANAGEMENT: '/system-settings/integration-management',
  SYSTEM_SETTINGS_NOTIFICATION_MANAGEMENT: '/system-settings/notification-management',
  SYSTEM_SETTINGS_AUDIT_MANAGEMENT: '/system-settings/audit-management',
  SYSTEM_SETTINGS_SECURITY_MANAGEMENT: '/system-settings/security-management',
};

export const ROUTES = {
  LOGIN: '/sign-in',
  DASHBOARD: '/',
  ...SYSTEM_SETTINGS,
  // Fallback route
  NOT_FOUND: '*',
} as const;

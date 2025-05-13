const SYSTEM_SETTINGS = {
  SYSTEM_SETTINGS: '/system-settings',
};

export const ROUTES = {
  LOGIN: '/sign-in',
  DASHBOARD: '/',
  ...SYSTEM_SETTINGS,
  // Fallback route
  NOT_FOUND: '*',
} as const;

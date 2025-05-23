import './styles/index.css';
import '@ant-design/v5-patch-for-react-19';
import '@xyflow/react/dist/style.css';

import dayjs from 'dayjs';
import 'dayjs/locale/ru.js';
import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes } from 'react-router';

import { AuthenticatePage } from 'pages/authenticate-page';
import { NotFoundRoutePath } from 'pages/not-found-route-path';

import { ROUTES } from 'shared/const';

import { BasePageLayout } from './layouts';
import { Providers } from './providers';

dayjs.locale('ru');
const DashboardPage = lazy(() => import('pages/dashboard-page'));
const SystemSettingsLayout = lazy(() => import('./layouts/system-settings-layout'));
const SystemSettingsGeneral = lazy(() => import('pages/system-settings/system-settings-general'));
const SystemSettingsDictionaryManagement = lazy(
  () => import('pages/system-settings/system-settings-dictionary-management')
);
const SystemSettingsUserManagement = lazy(() => import('pages/system-settings/system-settings-user-management'));
const SystemSettingsRouteManagement = lazy(() => import('pages/system-settings/system-settings-route-management'));
const SystemSettingsRouteCreate = lazy(() => import('pages/system-settings/system-settings-route-create'));
const SystemSettingsIntegrationManagement = lazy(
  () => import('pages/system-settings/system-settings-integration-management')
);
const SystemSettingsNotificationManagement = lazy(
  () => import('pages/system-settings/system-settings-notification-management')
);
const SystemSettingsAuditManagement = lazy(() => import('pages/system-settings/system-settings-audit-management'));
const SystemSettingsSecurityManagement = lazy(
  () => import('pages/system-settings/system-settings-security-management')
);

createRoot(document.getElementById('root')!).render(
  <Providers>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<AuthenticatePage />} />
      <Route element={<BasePageLayout />}>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route path={ROUTES.SYSTEM_SETTINGS} element={<SystemSettingsLayout />}>
          <Route path={ROUTES.SYSTEM_SETTINGS_GENERAL} element={<SystemSettingsGeneral />} />
          <Route path={ROUTES.SYSTEM_SETTINGS_DICTIONARY} element={<SystemSettingsDictionaryManagement />} />
          <Route path={ROUTES.SYSTEM_SETTINGS_USER_MANAGEMENT} element={<SystemSettingsUserManagement />} />
          <Route path={ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT}>
            <Route index element={<SystemSettingsRouteManagement />} />
            <Route path={ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT_CREATE} element={<SystemSettingsRouteCreate />} />
          </Route>
          <Route
            path={ROUTES.SYSTEM_SETTINGS_INTEGRATION_MANAGEMENT}
            element={<SystemSettingsIntegrationManagement />}
          />
          <Route
            path={ROUTES.SYSTEM_SETTINGS_NOTIFICATION_MANAGEMENT}
            element={<SystemSettingsNotificationManagement />}
          />
          <Route path={ROUTES.SYSTEM_SETTINGS_AUDIT_MANAGEMENT} element={<SystemSettingsAuditManagement />} />
          <Route path={ROUTES.SYSTEM_SETTINGS_SECURITY_MANAGEMENT} element={<SystemSettingsSecurityManagement />} />
        </Route>
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundRoutePath />} />
    </Routes>
  </Providers>
);

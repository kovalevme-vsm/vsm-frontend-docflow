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
const SettingsDictionary = lazy(() => import('pages/settings-dictionary'));
const SettingsDictionaryConfidentialityLevel = lazy(
  () => import('pages/settings-dictionary-confidentiality-level')
);
const SettingsDictionaryDocumentAttachmentTypes = lazy(
  () => import('pages/settings-dictionary-document-attachment-types')
);

const SettingsDictionaryExternalPersons = lazy(
  () => import('pages/settings-dictionary-external-persons')
);
const SettingsDictionaryOrganizations = lazy(
  () => import('pages/settings-dictionary-organizations')
);
const SettingsDictionaryStatuses = lazy(
  () => import('pages/settings-dictionary-statuses')
);
const SettingsUsersManagement = lazy(
  () => import('pages/settings-users-management')
);
const SettingsUsersManagementJobTitles = lazy(
  () => import('pages/settings-users-management-job-titles')
);
const SettingsUsersManagementUsers = lazy(
  () => import('pages/settings-users-management-users')
);
const SettingsUsersManagementDepartments = lazy(
  () => import('pages/settings-users-management-departments')
);
const SettingsUsersManagementGroups = lazy(
  () => import('pages/settings-users-management-groups')
);
const SettingsRoutesManagement = lazy(
  () => import('pages/settings-routes-management')
);
const SettingsRoutesManagementCreate = lazy(
  () => import('pages/settings-routes-management-create')
);
const DocumentsIncoming = lazy(() => import('pages/documents-incoming'));
const DocumentsOutgoing = lazy(() => import('pages/documents-outgoing'));
const DocumentsContract = lazy(() => import('pages/documents-contract'));
createRoot(document.getElementById('root')!).render(
  <Providers>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<AuthenticatePage />} />
      <Route element={<BasePageLayout />}>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY}
          element={<SettingsDictionary />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_CONFIDENTIALITY_LEVEL}
          element={<SettingsDictionaryConfidentialityLevel />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_DOCUMENT_ATTACHMENT_TYPES}
          element={<SettingsDictionaryDocumentAttachmentTypes />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_EXTERNAL_PERSONS}
          element={<SettingsDictionaryExternalPersons />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_ORGANIZATIONS}
          element={<SettingsDictionaryOrganizations />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_STATUSES}
          element={<SettingsDictionaryStatuses />}
        />
        <Route
          path={ROUTES.SETTINGS_USERS_MANAGEMENT}
          element={<SettingsUsersManagement />}
        />
        <Route
          path={ROUTES.SETTINGS_USERS_MANAGEMENT_JOB_TITLES}
          element={<SettingsUsersManagementJobTitles />}
        />
        <Route
          path={ROUTES.SETTINGS_USERS_MANAGEMENT_USERS}
          element={<SettingsUsersManagementUsers />}
        />
        <Route
          path={ROUTES.SETTINGS_USERS_MANAGEMENT_DEPARTMENTS}
          element={<SettingsUsersManagementDepartments />}
        />
        <Route
          path={ROUTES.SETTINGS_USERS_MANAGEMENT_GROUPS}
          element={<SettingsUsersManagementGroups />}
        />
        <Route
          path={ROUTES.SETTINGS_ROUTES_MANAGEMENT}
          element={<SettingsRoutesManagement />}
        />
        <Route
          path={ROUTES.SETTINGS_ROUTES_MANAGEMENT_CREATE}
          element={<SettingsRoutesManagementCreate />}
        />
        <Route
          path={ROUTES.DOCUMENTS_INCOMING}
          element={<DocumentsIncoming />}
        />
        <Route
          path={ROUTES.DOCUMENTS_OUTGOING}
          element={<DocumentsOutgoing />}
        />
        <Route
          path={ROUTES.DOCUMENTS_CONTRACT}
          element={<DocumentsContract />}
        />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundRoutePath />} />
    </Routes>
  </Providers>
);

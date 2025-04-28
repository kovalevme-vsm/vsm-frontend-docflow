import './styles/index.css';
import { createRoot } from 'react-dom/client';
import { Route, Routes } from 'react-router';

import { AuthenticatePage } from 'pages/authenticate-page';
import { ConfidentialityLevelPage } from 'pages/confidentiality-level-page';
import { DashboardPage } from 'pages/dashboard-page';
import { DictionaryAppendixTypePage } from 'pages/dictionary-appendix-type-page';
import { DictionaryDepartmentPage } from 'pages/dictionary-departments-page';
import { DictionaryJobTitlePage } from 'pages/dictionary-job-title-page';
import { DictionaryOrganizationPage } from 'pages/dictionary-organization-page';
import { DictionaryPersonsPage } from 'pages/dictionary-persons-page';
import { IncomingDocumentsCreatePage } from 'pages/incoming-documents-create-page';
import { IncomingDocumentsPage } from 'pages/incoming-documents-page';
import { NotFoundRoutePath } from 'pages/not-found-route-path';
import { SettingsDictionaryPage } from 'pages/settings-dictionary-page';

import { ROUTES } from 'shared/const';

import { BasePageLayout } from './layouts';
import { Providers } from './providers';

import '@ant-design/v5-patch-for-react-19';
import { SettingsRoutesCreatePage } from 'pages/settings-routes-create-page';
import { SettingsRoutesPage } from 'pages/settings-routes-page';
import { DictionaryStatusPage } from 'pages/dictionary-statuses-page';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<AuthenticatePage />} />
      <Route element={<BasePageLayout />}>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route
          path={ROUTES.DOCUMENTS_INCOMING}
          element={<IncomingDocumentsPage />}
        />
        <Route
          path={ROUTES.DOCUMENTS_INCOMING_CREATE}
          element={<IncomingDocumentsCreatePage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY}
          element={<SettingsDictionaryPage />}
        />
        <Route path={ROUTES.SETTINGS_ROUTES} element={<SettingsRoutesPage />} />
        <Route
          path={ROUTES.SETTINGS_ROUTES_CREATE}
          element={<SettingsRoutesCreatePage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('organization')}
          element={<DictionaryOrganizationPage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('degrees-confidentiality')}
          element={<ConfidentialityLevelPage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('job-titles')}
          element={<DictionaryJobTitlePage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('persons')}
          element={<DictionaryPersonsPage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('appendix-types')}
          element={<DictionaryAppendixTypePage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('departments')}
          element={<DictionaryDepartmentPage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('statuses')}
          element={<DictionaryStatusPage />}
        />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundRoutePath />} />
    </Routes>
  </Providers>
);

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
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundRoutePath />} />
    </Routes>
  </Providers>
);

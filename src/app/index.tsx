import './styles/index.css';
import { createRoot } from 'react-dom/client';
import { Route, Routes } from 'react-router';

import { AuthenticatePage } from 'pages/authenticate-page';
import { DashboardPage } from 'pages/dashboard-page';
import { DictionaryOrganizationPage } from 'pages/dictionary-organization-page/ui/page.tsx';
import { NotFoundRoutePath } from 'pages/not-found-route-path';
import { SettingsDictionaryPage } from 'pages/settings-dictionary-page';

import { ROUTES } from 'shared/const';

import { BasePageLayout } from './layouts';
import { Providers } from './providers';
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<AuthenticatePage />} />
      <Route element={<BasePageLayout />}>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY}
          element={<SettingsDictionaryPage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('organization')}
          element={<DictionaryOrganizationPage />}
        />
        <Route
          path={ROUTES.SETTINGS_DICTIONARY_LIST('degrees-confidentiality')}
          element={<></>}
        />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundRoutePath />} />
    </Routes>
  </Providers>
);

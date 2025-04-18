import { createRoot } from 'react-dom/client';

import './styles/index.css';
import { Route, Routes } from 'react-router';

import { AuthenticatePage } from 'pages/authenticate-page';
import { DashboardPage } from 'pages/dashboard-page';
import { IncomingDocumentsCreatePage } from 'pages/incoming-documents-create-page';
import { IncomingDocumentsPage } from 'pages/incoming-documents-page';
import { NotFoundRoutePath } from 'pages/not-found-route-path';
import { OutgoingDocumentsPage } from 'pages/outgoing-documents-page';

import { ROUTES } from 'shared/const';

import { BasePageLayout } from './layouts';
import { Providers } from './providers';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<AuthenticatePage />} />
      <Route element={<BasePageLayout />}>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route path={ROUTES.DOCUMENTS_BASE}>
          <Route
            path={ROUTES.DOCUMENTS_INCOMING}
            element={<IncomingDocumentsPage />}
          />
          <Route
            path={ROUTES.DOCUMENTS_INCOMING_CREATE}
            element={<IncomingDocumentsCreatePage />}
          />
          <Route
            path={ROUTES.DOCUMENTS_OUTGOING}
            element={<OutgoingDocumentsPage />}
          />
        </Route>
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundRoutePath />} />
    </Routes>
  </Providers>
);

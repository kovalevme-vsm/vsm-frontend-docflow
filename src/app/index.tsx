import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { DashboardPage } from 'pages/dashboard-page';
import { Route, Routes } from 'react-router';
import {
  BasePageLayout,
  BrowserRouteProvider,
  ThemeProvider,
} from './providers';
import { AuthenticatePage } from 'pages/authenticate-page';
import { IncomingDocumentsPage } from 'pages/incoming-documents-page';
import { OutgoingDocumentsPage } from 'pages/outgoing-documents-page';
import { ROUTES } from 'shared/const';
import { NotFoundRoutePath } from 'pages/not-found-route-path';
import { IncomingDocumentsCreatePage } from 'pages/incoming-documents-create-page';

createRoot(document.getElementById('root')!).render(
  <BrowserRouteProvider>
    <ThemeProvider defaultTheme={'system'} storageKey={'vsm-doc-flow-ui-theme'}>
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
    </ThemeProvider>
  </BrowserRouteProvider>
);

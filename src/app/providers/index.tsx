import { PropsWithChildren, ReactElement } from 'react';

import { QueryProvider } from 'shared/lib/query';

import { BrowserRouteProvider } from './browser-route-provider';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: PropsWithChildren): ReactElement {
  return (
    <ThemeProvider defaultTheme={'system'} storageKey={'vsm-doc-flow-ui-theme'}>
      <BrowserRouteProvider>
        <QueryProvider>{children}</QueryProvider>
      </BrowserRouteProvider>
    </ThemeProvider>
  );
}

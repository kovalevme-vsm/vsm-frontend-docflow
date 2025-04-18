import { PropsWithChildren, ReactElement } from 'react';

import { BrowserRouteProvider } from './browser-route-provider';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: PropsWithChildren): ReactElement {
  return (
    <ThemeProvider defaultTheme={'system'} storageKey={'vsm-doc-flow-ui-theme'}>
      <BrowserRouteProvider>{children}</BrowserRouteProvider>
    </ThemeProvider>
  );
}

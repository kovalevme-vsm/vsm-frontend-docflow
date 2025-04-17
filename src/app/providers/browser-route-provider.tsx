import { PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router';

export function BrowserRouteProvider({
  children,
}: PropsWithChildren): ReactElement {
  return <BrowserRouter>{children}</BrowserRouter>;
}

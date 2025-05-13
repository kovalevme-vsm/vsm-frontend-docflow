import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { Navigate, useMatch } from 'react-router';

import { ApplicationLogo } from 'entities/application-logo';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { ROUTES } from 'shared/const/router';
import { useApiInterceptor } from 'shared/lib/axios/client';
import { useApiQuery } from 'shared/lib/query';

export function AuthenticateProvider({
  children,
}: PropsWithChildren): ReactElement {
  useApiInterceptor();
  const match = useMatch(ROUTES.LOGIN);

  const [showChild, setShowChild] = useState(false);

  const { isPending, isError, error, isSuccess } = useApiQuery({
    apiPath: QUERY_PATH.USER_AUTH_TOKEN_VALIDATE,
    queryKey: QUERY_KEYS.USERS_AUTH_TOKEN_VALIDATE(),
    staleTime: 0,
    retry: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChild(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isError, error, isSuccess]);

  if (match && isSuccess) return <Navigate to={ROUTES.DASHBOARD} />;

  if (isPending || !showChild) {
    return (
      <main
        className={
          'background-color flex h-screen w-screen items-center justify-center'
        }
      >
        <ApplicationLogo />
        <span className={'text-gray-950 dark:text-gray-50'}></span>
      </main>
    );
  }

  return <>{children}</>;
}

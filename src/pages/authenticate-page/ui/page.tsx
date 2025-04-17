import { ReactElement } from 'react';
import { CompanyLogo } from 'shared/ui';
import { AuthenticateForm } from 'pages/authenticate-page/ui/authenticate-form.tsx';
import { SystemCopyright } from 'widgets/system-copyright';

export function AuthenticatePage(): ReactElement {
  return (
    <main
      className={
        'flex h-dvh w-screen flex-col justify-between bg-neutral-50 p-4 dark:bg-gray-950'
      }
    >
      <header
        className={'flex h-12 w-full items-center justify-between md:h-16'}
      >
        <CompanyLogo />
      </header>
      <AuthenticateForm />
      <footer>
        <SystemCopyright />
      </footer>
    </main>
  );
}

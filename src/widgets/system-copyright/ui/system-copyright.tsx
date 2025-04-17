import { ReactElement } from 'react';

export function SystemCopyright(): ReactElement {
  return (
    <span className={'text-center text-xs text-gray-400'}>
      © 2025{' '}
      <a
        className={'text-blue-500'}
        href={'https://www.vsm2stl.ru'}
        target={'_blank'}
      >
        ООО "ВСМ Две Столицы"
      </a>{' '}
      | {import.meta.env.VITE_APP_VERSION}
    </span>
  );
}

import { ReactElement } from 'react';

import companyLogoDark from '../assets/vsm-logo-dark.svg';
import companyLogoLight from '../assets/vsm-logo-light.svg';

export function CompanyLogo(): ReactElement {
  return (
    <div className={'h-14'}>
      <img
        className="h-full dark:hidden"
        src={companyLogoLight}
        alt="ВСМ Две Столицы"
        loading="lazy"
      />
      <img
        className="hidden h-full dark:block"
        src={companyLogoDark}
        alt="ВСМ Две Столицы"
        loading="lazy"
      />
    </div>
  );
}

import { ReactElement } from 'react';
import { TbCategory } from 'react-icons/tb';

import { PageHeader } from 'widgets/page-header';

export function DashboardPage(): ReactElement {
  return <PageHeader icon={TbCategory} title={'Панель управления'} />;
}

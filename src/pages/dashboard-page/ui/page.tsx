import { ReactElement } from 'react';
import { PageHeader } from 'widgets/page-header';
import { TbCategory } from 'react-icons/tb';

export function DashboardPage(): ReactElement {
  return <PageHeader icon={TbCategory} title={'Панель управления'} />;
}

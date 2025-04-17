import { ReactElement } from 'react';
import { PageHeader } from 'widgets/page-header';
import { TbMailUp } from 'react-icons/tb';

export function OutgoingDocumentsPage(): ReactElement {
  return <PageHeader icon={TbMailUp} title={'Исходящие документы'} />;
}

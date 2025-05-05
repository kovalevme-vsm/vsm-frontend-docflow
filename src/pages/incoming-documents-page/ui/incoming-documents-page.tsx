import { Button, Table } from 'antd';
import { ReactElement } from 'react';
import { TbMailDown } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { ROUTES } from 'shared/const';

export function IncomingDocumentsPage(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-4'}>
      <PageHeader icon={TbMailDown} title={'Входящие'} />
      <Button
        type={'primary'}
        onClick={() => navigate(ROUTES.DOCUMENTS_INCOMING_CREATE)}
      >
        Создать новую карточку
      </Button>
      <Table />
    </div>
  );
}

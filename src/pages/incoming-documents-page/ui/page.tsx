import { Button } from 'antd';
import { ReactElement } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { TbMailDown } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { ROUTES } from 'shared/const';

export function IncomingDocumentsPage(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-3'}>
      <PageHeader icon={TbMailDown} title={'Входящие документы'} />
      <div key={'actions'} className={'flex items-center justify-end'}>
        <Button
          type={'primary'}
          onClick={() => navigate(ROUTES.DOCUMENTS_INCOMING_CREATE)}
          className={'w-full xl:w-fit'}
        >
          <IoMdAddCircleOutline />
          Создать входящий документ
        </Button>
      </div>
    </div>
  );
}

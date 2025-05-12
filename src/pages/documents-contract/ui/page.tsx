import { ReactElement } from 'react';
import { TbChevronLeft, TbFile } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { IconButton } from 'shared/ui';

export function DocumentsContract(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbFile} title={'Договоры'} />
      </div>
    </div>
  );
}

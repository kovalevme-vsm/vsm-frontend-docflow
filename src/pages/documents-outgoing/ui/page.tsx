import { ReactElement } from 'react';
import { TbChevronLeft, TbMailUp } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { IconButton } from 'shared/ui';

export function DocumentsOutgoing(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbMailUp} title={'Исходящие документы'} />
      </div>
    </div>
  );
}

import { Button } from 'antd';
import { ReactElement, useState } from 'react';
import { CgOrganisation } from 'react-icons/cg';
import { TbChevronLeft, TbPlus } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { CreateOrganizationModal } from 'widgets/create-organization-modal';
import { OrganizationTable } from 'widgets/organization-table';
import { PageHeader } from 'widgets/page-header';

import { IconButton } from 'shared/ui';

export function DictionaryOrganizationPage(): ReactElement {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={CgOrganisation} title={'Организации'} />
      </div>
      <div className={'flex justify-end'}>
        <Button
          icon={<TbPlus />}
          type={'primary'}
          onClick={() => setModalOpen(true)}
        >
          Создать
        </Button>
      </div>
      <OrganizationTable />
      <CreateOrganizationModal
        modalOpen={modalOpen}
        onCancel={() => setModalOpen(false)}
      />
    </div>
  );
}

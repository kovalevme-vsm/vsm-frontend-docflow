import { ReactElement } from 'react';
import { TbBook } from 'react-icons/tb';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsAuditManagement(): ReactElement {
  return (
    <SectionHeader
      icon={TbBook}
      title={'Аудит и отчетность'}
      description={
        'Настройте правила создания аудита, периодичность составления отчетов и журналов'
      }
    />
  );
}

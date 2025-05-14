import { ReactElement } from 'react';
import { TbBooks } from 'react-icons/tb';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsDictionaryManagement(): ReactElement {
  return (
    <div className={'space-y-4'}>
      <SectionHeader
        icon={TbBooks}
        title={'Справочники'}
        description={
          'Настройте справочники системы (статусы, типы, тэги и тд.)'
        }
      />
    </div>
  );
}

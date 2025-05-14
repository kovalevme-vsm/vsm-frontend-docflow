import { ReactElement } from 'react';
import { TbSettings } from 'react-icons/tb';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsGeneral(): ReactElement {
  return (
    <>
      <SectionHeader
        icon={TbSettings}
        title={'Общие настройки'}
        description={
          'Настройте базовую конфигурацию системы и управляйте состоянием'
        }
      />
    </>
  );
}

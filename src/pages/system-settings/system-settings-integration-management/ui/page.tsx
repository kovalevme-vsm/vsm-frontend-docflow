import { ReactElement } from 'react';
import { TbApi } from 'react-icons/tb';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsIntegrationManagement(): ReactElement {
  return (
    <SectionHeader
      icon={TbApi}
      title={'Интеграции и API'}
      description={
        'Подключайте новые сервисы, управляйте и просматривайте журналы интеграций'
      }
    />
  );
}

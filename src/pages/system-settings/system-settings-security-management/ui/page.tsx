import { ReactElement } from 'react';
import { TbLock } from 'react-icons/tb';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsSecurityManagement(): ReactElement {
  return (
    <SectionHeader
      icon={TbLock}
      title={'Настройки безопасности'}
      description={
        'Настраивайте правила для установки паролей, запрещайте доступ к системе, черный и белый список IP адресов'
      }
    />
  );
}

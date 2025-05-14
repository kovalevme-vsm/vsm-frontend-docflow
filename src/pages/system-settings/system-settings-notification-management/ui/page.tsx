import { ReactElement } from 'react';
import { TbNotification } from 'react-icons/tb';

import { SectionHeader } from 'entities/section-header';

export default function SystemSettingsNotificationManagement(): ReactElement {
  return (
    <SectionHeader
      icon={TbNotification}
      title={'Уведомления и оповещения'}
      description={
        'Создавайте системы оповещения, конфигурируйте формат уведомлений, подключайте SMTP и др.'
      }
    />
  );
}

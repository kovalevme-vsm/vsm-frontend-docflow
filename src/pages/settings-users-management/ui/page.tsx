import { ReactElement } from 'react';
import { RiUserSettingsLine } from 'react-icons/ri';

import { elements } from 'pages/settings-users-management/models/elements.tsx';

import { PageHeader } from 'widgets/page-header';

import { NavigationCard } from 'entities/navigation-card';

export function SettingsUsersManagement(): ReactElement {
  return (
    <div className={'space-y-4'}>
      <PageHeader
        icon={RiUserSettingsLine}
        title={'Управление пользователями'}
      />
      {elements.map((value) => (
        <NavigationCard
          title={value.title}
          icon={value.icon}
          route={value.route}
        />
      ))}
    </div>
  );
}

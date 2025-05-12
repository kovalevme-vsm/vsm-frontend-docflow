import { ReactElement } from 'react';
import { TbBook } from 'react-icons/tb';

import { dictionaryElements } from 'pages/settings-dictionary/models/elements.tsx';

import { PageHeader } from 'widgets/page-header';

import { NavigationCard } from 'entities/navigation-card';

export function SettingsDictionary(): ReactElement {
  return (
    <div className={'space-y-4'}>
      <PageHeader icon={TbBook} title={'Справочники'} />
      {dictionaryElements.map((value) => (
        <NavigationCard
          title={value.title}
          icon={value.icon}
          route={value.route}
        />
      ))}
    </div>
  );
}

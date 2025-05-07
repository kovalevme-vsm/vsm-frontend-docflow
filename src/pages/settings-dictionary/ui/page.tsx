import { ReactElement } from 'react';
import { TbBook } from 'react-icons/tb';

import { dictionaryElements } from 'pages/settings-dictionary/models/elements.tsx';
import { SettingsDictionaryItem } from 'pages/settings-dictionary/ui/settings-dictionary-item.tsx';

import { PageHeader } from 'widgets/page-header';

export function SettingsDictionary(): ReactElement {
  return (
    <div className={'space-y-4'}>
      <PageHeader icon={TbBook} title={'Справочники'} />
      {dictionaryElements.map((value) => (
        <SettingsDictionaryItem
          title={value.title}
          icon={value.icon}
          route={value.route}
        />
      ))}
    </div>
  );
}

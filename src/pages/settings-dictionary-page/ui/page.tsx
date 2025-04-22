import { ReactElement } from 'react';
import { CgOrganisation } from 'react-icons/cg';
import { GrSecure } from 'react-icons/gr';
import { TbBook, TbUser } from 'react-icons/tb';

import { DictionaryListItem } from 'pages/settings-dictionary-page/ui/dictionary-list-item.tsx';

import { PageHeader } from 'widgets/page-header';

import { ROUTES } from 'shared/const';

export function SettingsDictionaryPage(): ReactElement {
  return (
    <div className={'space-y-4'}>
      <PageHeader icon={TbBook} title={'Справочники'} />
      <section className={'space-y-2'}>
        <DictionaryListItem
          icon={CgOrganisation}
          title={'Организации'}
          route={ROUTES.SETTINGS_DICTIONARY_LIST('organization')}
        />
        <DictionaryListItem
          icon={GrSecure}
          title={'Степени конфиденциальности'}
          route={ROUTES.SETTINGS_DICTIONARY_LIST('degrees-confidentiality')}
        />
        <DictionaryListItem
          icon={TbUser}
          title={'Должности'}
          route={ROUTES.SETTINGS_DICTIONARY_LIST('job-titles')}
        />
      </section>
    </div>
  );
}

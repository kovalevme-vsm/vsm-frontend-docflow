import { ReactElement } from 'react';
import { CgOrganisation } from 'react-icons/cg';
import { GrSecure } from 'react-icons/gr';
import {
  TbBadges,
  TbBook,
  TbFiles,
  TbHierarchy,
  TbStatusChange,
  TbUsers,
} from 'react-icons/tb';

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
          icon={TbHierarchy}
          title={'Дирекции и отделы'}
          route={ROUTES.SETTINGS_DICTIONARY_LIST('departments')}
        />
        <DictionaryListItem
          icon={TbBadges}
          title={'Должности'}
          route={ROUTES.SETTINGS_DICTIONARY_LIST('job-titles')}
        />
        <DictionaryListItem
          icon={TbUsers}
          title={'Физические лица и представители юридических лиц'}
          route={ROUTES.SETTINGS_DICTIONARY_LIST('persons')}
        />
        <DictionaryListItem
          icon={TbFiles}
          title={'Типы приложений'}
          route={ROUTES.SETTINGS_DICTIONARY_LIST('appendix-types')}
        />
        <DictionaryListItem
          icon={TbStatusChange}
          title={'Статусы'}
          route={ROUTES.SETTINGS_DICTIONARY_LIST('statuses')}
        />
      </section>
    </div>
  );
}

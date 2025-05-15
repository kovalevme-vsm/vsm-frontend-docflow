import {
  confidentialityLevelColumns,
  documentAttachmentTypesColumns,
  externalPersonsColumns,
  organizationsColumns,
  statusesColumns,
} from 'pages/system-settings/system-settings-dictionary-management/models/columns.tsx';
import { ConfidentialityLevelType } from 'pages/system-settings/system-settings-dictionary-management/models/types.ts';

import { DictionaryManagementBaseTab } from 'widgets/dictionary-management-base-tab';

export const TAB_ITEMS = [
  {
    label: `Типы конфиденциальности`,
    key: 'confidentiality-level',
    children: (
      <DictionaryManagementBaseTab<ConfidentialityLevelType>
        dictionaryKey={'confidentiality-level'}
        columns={confidentialityLevelColumns}
      />
    ),
  },
  {
    label: `Типы приложений`,
    key: 'document-attachment-types',
    children: (
      <DictionaryManagementBaseTab
        dictionaryKey={'document-attachment-types'}
        columns={documentAttachmentTypesColumns}
      />
    ),
  },
  {
    label: `Статусы`,
    key: 'statuses',
    children: <DictionaryManagementBaseTab dictionaryKey={'statuses'} columns={statusesColumns} />,
  },
  {
    label: `Внешние пользователи`,
    key: 'external-persons',
    children: <DictionaryManagementBaseTab dictionaryKey={'external-persons'} columns={externalPersonsColumns} />,
  },
  {
    label: `Организации`,
    key: 'organization',
    children: <DictionaryManagementBaseTab dictionaryKey={'organization'} columns={organizationsColumns} />,
  },
];

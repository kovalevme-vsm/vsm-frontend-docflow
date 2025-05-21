import { ColorPicker, Form, Input } from 'antd';

import {
  confidentialityLevelColumns,
  documentAttachmentTypesColumns,
  externalPersonsColumns,
  organizationsColumns,
  statusesColumns,
} from 'pages/system-settings/system-settings-dictionary-management/models/columns.tsx';
import {
  ConfidentialityLevelType,
  DocumentAttachmentType,
  ExternalPersonType,
  OrganizationType,
  StatusType,
} from 'pages/system-settings/system-settings-dictionary-management/models/types.ts';

import { DictionaryManagementBaseTab } from 'widgets/dictionary-management-base-tab';

import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

export const TAB_ITEMS = [
  {
    label: `Типы конфиденциальности`,
    key: 'confidentiality-level',
    children: (
      <DictionaryManagementBaseTab<ConfidentialityLevelType>
        dictionaryKey={'confidentiality-level'}
        columns={confidentialityLevelColumns}
        formFields={
          <Form.Item
            name={'name'}
            rules={[
              {
                required: true,
                message: 'Пожалуйста, укажите Наименование',
              },
            ]}
          >
            <Input placeholder={'Наименование'} />
          </Form.Item>
        }
      />
    ),
  },
  {
    label: `Типы приложений`,
    key: 'document-attachment-types',
    children: (
      <DictionaryManagementBaseTab<DocumentAttachmentType>
        dictionaryKey={'document-attachment-types'}
        columns={documentAttachmentTypesColumns}
        formFields={
          <Form.Item
            name={'name'}
            rules={[
              {
                required: true,
                message: 'Пожалуйста, укажите Наименование',
              },
            ]}
          >
            <Input placeholder={'Наименование'} />
          </Form.Item>
        }
      />
    ),
  },
  {
    label: `Статусы`,
    key: 'statuses',
    children: (
      <DictionaryManagementBaseTab<StatusType>
        dictionaryKey={'statuses'}
        columns={statusesColumns}
        formFields={
          <>
            <Form.Item
              name={'name'}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, укажите Наименование',
                },
              ]}
            >
              <Input placeholder={'Наименование'} />
            </Form.Item>
            <Form.Item
              name="color"
              normalize={(value) => {
                return value?.toHexString();
              }}
              getValueProps={(value) => {
                return { value };
              }}
            >
              <ColorPicker showText={(color) => <span>Цвет статуса ({color.toHexString()})</span>} />
            </Form.Item>
          </>
        }
      />
    ),
  },
  {
    label: `Внешние пользователи`,
    key: 'external-persons',
    children: (
      <DictionaryManagementBaseTab<ExternalPersonType>
        dictionaryKey={'external-persons'}
        columns={externalPersonsColumns}
        formFields={
          <>
            <Form.Item
              name={'first_name'}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, укажите Имя',
                },
              ]}
            >
              <Input placeholder={'Имя'} />
            </Form.Item>
            <Form.Item
              name={'last_name'}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, укажите Фамилия',
                },
              ]}
            >
              <Input placeholder={'Фамилия'} />
            </Form.Item>
            <Form.Item name={'middle_name'}>
              <Input placeholder={'Отчество'} />
            </Form.Item>
            <Form.Item name={'organization_ids'}>
              <SelectInfinite
                placeholder={'Организации пользователя'}
                mode={'tags'}
                apiPath={QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.paths.index('organization')}
                queryKey={QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.list('organization')}
              />
            </Form.Item>
          </>
        }
      />
    ),
  },
  {
    label: `Организации`,
    key: 'organization',
    children: (
      <DictionaryManagementBaseTab<OrganizationType>
        dictionaryKey={'organization'}
        columns={organizationsColumns}
        formFields={
          <>
            <Form.Item
              name={'name'}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, укажите Наименование',
                },
              ]}
            >
              <Input placeholder={'Наименование'} />
            </Form.Item>
            <Form.Item
              name={'inn_number'}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, укажите ИНН организации',
                },
                {
                  type: 'string',
                  min: 10,
                  max: 12,
                  pattern: /^[1-9]+$/,
                  message: 'ИНН должен содержать только цифры и не меньше 10 и не больше 12 символов',
                },
              ]}
            >
              <Input placeholder={'ИНН'} />
            </Form.Item>
            <Form.Item
              name={'kpp_number'}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, укажите КПП организации',
                },
                {
                  type: 'string',
                  min: 10,
                  max: 12,
                  pattern: /^[1-9]+$/,
                  message: 'КПП должен содержать только цифры и не меньше 10 и не больше 12 символов',
                },
              ]}
            >
              <Input placeholder={'КПП'} />
            </Form.Item>
          </>
        }
      />
    ),
  },
];

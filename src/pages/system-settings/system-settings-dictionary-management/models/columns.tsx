import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

import {
  ConfidentialityLevelType,
  DocumentAttachmentType,
  ExternalPersonType,
  OrganizationType,
  StatusType,
} from 'pages/system-settings/system-settings-dictionary-management/models/types.ts';

const baseDictionaryColumns = <T,>(): ColumnsType<T> => [
  {
    title: 'Дата и время создания',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (value: string | null) => dayjs(value).format('HH:mm:ss DD MMM YYYY'),
  },
  {
    title: 'Статус',
    dataIndex: 'is_active',
    key: 'is_active',
    render: (value: boolean) =>
      value ? <Tag color={'success'}>Активен</Tag> : <Tag color={'error'}>Деактивирован</Tag>,
  },
];

export const confidentialityLevelColumns: ColumnsType<ConfidentialityLevelType> = [
  { title: 'Наименование', dataIndex: 'name' },
  ...baseDictionaryColumns<ConfidentialityLevelType>(),
];

export const documentAttachmentTypesColumns: ColumnsType<DocumentAttachmentType> = [
  { title: 'Наименование', dataIndex: 'name' },
  ...baseDictionaryColumns<DocumentAttachmentType>(),
];

export const statusesColumns: ColumnsType<StatusType> = [
  {
    title: 'Наименование',
    render: (value: StatusType) => <Tag color={value.color}>{value.name}</Tag>,
  },
  ...baseDictionaryColumns<StatusType>(),
];
export const externalPersonsColumns: ColumnsType<ExternalPersonType> = [
  {
    title: 'Имя',
    dataIndex: 'first_name',
  },
  {
    title: 'Фамилия',
    dataIndex: 'last_name',
  },
  {
    title: 'Отчество',
    dataIndex: 'middle_name',
  },
  {
    title: 'Организации',
    dataIndex: 'organizations',
    key: 'organizations',
    render: (value: string[]) => value.map((tag) => <Tag>{tag}</Tag>),
  },
  ...baseDictionaryColumns<ExternalPersonType>(),
];

export const organizationsColumns: ColumnsType<OrganizationType> = [
  {
    title: 'Имя',
    dataIndex: 'name',
  },
  {
    title: 'ИНН',
    dataIndex: 'inn_number',
  },
  {
    title: 'КПП',
    dataIndex: 'kpp_number',
  },
  ...baseDictionaryColumns<OrganizationType>(),
];

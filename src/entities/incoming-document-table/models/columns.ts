import { ColumnDef } from '@tanstack/react-table';

export const incomingDocumentTableColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'created_at',
    header: 'Дата регистрации',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'incoming_number',
    header: 'Входящий номер',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'destination',
    header: 'Адресат',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'sender',
    header: 'Отправитель',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'organization',
    header: 'Организация',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'outgoing_date',
    header: 'Дата исходящего',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'outgoing_number',
    header: 'Исходящий номер',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'content',
    header: 'Содержание',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'sheets',
    header: 'Листов',
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: 'application_sheets',
    header: 'Листов приложений',
    enableResizing: false,
    enableSorting: false,
  },
];

import { Table } from 'shared/ui';
import { incomingDocumentTableColumns } from 'entities/incoming-document-table/models/columns.ts';

export function IncomingDocumentTable() {
  return <Table data={[]} columns={incomingDocumentTableColumns} />;
}

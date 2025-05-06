import { RcFile } from 'antd/es/upload';

export type IncomingDocument = {
  appendix_type: string;
  application_number_sheets?: number;
  confidentiality_level: string;
  content: string;
  external_date: string;
  external_outgoing_number: string;
  external_sender: string;
  files: RcFile[];
  is_paper_document: boolean;
  number_sheets: number;
  organization: string;
  outgoings: string[];
  recipient: string;
};

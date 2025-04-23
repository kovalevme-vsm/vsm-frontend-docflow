import { AxiosError } from 'axios';

type DRFStandardizedErrorResponse = {
  code: string;
  attr: string | null;
  detail: string;
};

export type DRFErrorResponse = {
  type: string;
  error: DRFStandardizedErrorResponse[];
  status_code: string;
};

export type DRFListPaginationResponse<T> = {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
};

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<DRFErrorResponse>;
  }
}

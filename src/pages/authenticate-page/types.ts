import { AxiosResponse } from 'axios';

export type AuthenticateFormValue = {
  username: string;
  password: string;
};

export type AuthenticateResponse = AxiosResponse<{
  access: string;
  refresh: string;
}>;

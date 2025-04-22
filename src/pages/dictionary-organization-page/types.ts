export type OrganizationType = {
  name: string;
  inn_number: string;
  kpp_number: string;
  is_active: boolean;
  created_at: string;
  id: string;
};
export type OrganizationCreateFormValue = {
  name: string;
  inn_number: string;
  kpp_number: string;
  is_active: boolean;
};

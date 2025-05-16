export interface BaseType {
  is_active: boolean;
  created_at: string;
}

export interface ConfidentialityLevelType extends BaseType {
  id: string;
  name: string;
}
export interface DocumentAttachmentType extends BaseType {
  id: string;
  name: string;
}
export interface StatusType extends BaseType {
  id: string;
  name: string;
}
export interface ExternalPersonType extends BaseType {
  id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  organizations: string[];
  organization_ids: string[];
}

export interface OrganizationType extends BaseType {
  id: string;
  name: string;
  inn_number: string;
  kpp_number: string;
  is_active: boolean;
  created_at: string;
}

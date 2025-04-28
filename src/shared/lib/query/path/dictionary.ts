export const dictionaryApiPath = {
  securityClassification: 'dictionary/security-classification',
  recipient: 'dictionary/recipient',
  sender: 'dictionary/sender',
  organization: 'dictionary/organization',
  organizationDetail: (organizationId: string | number | null) =>
    `dictionary/organization/${organizationId}`,
  confidentialityLevel: 'dictionary/confidentiality-level',
  confidentialityLevelDetail: (
    confidentialityLevelId: string | number | null
  ) => `dictionary/confidentiality-level/${confidentialityLevelId}`,
  jobTitle: 'dictionary/job-title',
  jobTitleDetail: (jobTitleId: string | number | null) =>
    `dictionary/job-title/${jobTitleId}`,
  persons: 'dictionary/persons',
  personsRole: 'dictionary/persons-roles',
  personsDetail: (personId: string | number | null) =>
    `dictionary/persons/${personId}`,
  appendixType: 'dictionary/appendix-types',
  appendixTypeDetail: (appendixTypeId: string | number | null) =>
    `dictionary/appendix-types/${appendixTypeId}`,
  department: 'dictionary/departments',
  departmentDetail: (departmentId: string | number | null) =>
    `dictionary/departments/${departmentId}`,
  departmentCode: 'dictionary/department-codes',
  status: 'dictionary/statuses',
  statusDetail: (statusId: string | number | null) =>
    `dictionary/statuses/${statusId}`,
};

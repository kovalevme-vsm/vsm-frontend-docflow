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
  personsDetail: (personId: string | number | null) =>
    `dictionary/persons/${personId}`,
};

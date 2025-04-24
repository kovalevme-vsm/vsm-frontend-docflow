export const dictionaryQueryKey = {
  all: ['dictionary'],
  organization: () => [...dictionaryQueryKey.all, 'organization'],
  organizationSelect: () => [
    ...dictionaryQueryKey.all,
    'organization',
    'select',
  ],
  confidentialityLevel: () => [
    ...dictionaryQueryKey.all,
    'confidentiality-level',
  ],
  jobTitle: () => [...dictionaryQueryKey.all, 'job-title'],
  persons: () => [...dictionaryQueryKey.all, 'persons'],
  personsRoleSelect: () => [
    ...dictionaryQueryKey.all,
    'persons-role',
    'select',
  ],
};

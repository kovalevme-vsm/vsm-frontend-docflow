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
  confidentialityLevelSelect: () => [
    ...dictionaryQueryKey.all,
    'confidentiality-level',
    'select',
  ],
  jobTitle: () => [...dictionaryQueryKey.all, 'job-title'],
  persons: () => [...dictionaryQueryKey.all, 'persons'],
  personsSelect: () => [...dictionaryQueryKey.all, 'persons', 'select'],
  personsRoleSelect: () => [
    ...dictionaryQueryKey.all,
    'persons-role',
    'select',
  ],
};

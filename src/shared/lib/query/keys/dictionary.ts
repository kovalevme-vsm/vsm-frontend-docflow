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
  jobTitleSelect: () => [...dictionaryQueryKey.all, 'job-title', 'select'],
  persons: () => [...dictionaryQueryKey.all, 'persons'],
  personsSelect: () => [...dictionaryQueryKey.all, 'persons', 'select'],
  personsRoleSelect: () => [
    ...dictionaryQueryKey.all,
    'persons-role',
    'select',
  ],
  appendixType: () => [...dictionaryQueryKey.all, 'appendix-types'],
  appendixTypeSelect: () => [
    ...dictionaryQueryKey.all,
    'appendix-types',
    'select',
  ],
  department: () => [...dictionaryQueryKey.all, 'department'],
  departmentSelect: () => [...dictionaryQueryKey.all, 'department', 'select'],
  departmentCodesSelect: () => [
    ...dictionaryQueryKey.all,
    'department-codes',
    'select',
  ],
  status: () => [...dictionaryQueryKey.all, 'statuses'],
  statusSelect: () => [...dictionaryQueryKey.all, 'statuses', 'select'],
};

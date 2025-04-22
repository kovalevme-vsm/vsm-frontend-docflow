export const dictionaryQueryKey = {
  all: ['dictionary'],
  organization: () => [...dictionaryQueryKey.all, 'organization'],
  confidentialityLevel: () => [
    ...dictionaryQueryKey.all,
    'confidentiality-level',
  ],
  jobTitle: () => [...dictionaryQueryKey.all, 'job-title'],
};

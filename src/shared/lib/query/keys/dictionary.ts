export const dictionaryQueryKey = {
  all: ['dictionary'],
  organization: () => [...dictionaryQueryKey.all, 'organization'],
  organizationDetail: (organizationId: string | null) => [
    ...dictionaryQueryKey.all,
    'organization',
    organizationId,
  ],
};

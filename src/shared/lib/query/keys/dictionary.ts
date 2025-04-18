export const dictionaryQueryKey = {
  all: ['dictionary'],
  securityClassification: () => [
    ...dictionaryQueryKey.all,
    'securityClassification',
  ],
  recipient: () => [...dictionaryQueryKey.all, 'recipient'],
  sender: () => [...dictionaryQueryKey.all, 'sender'],
  organization: () => [...dictionaryQueryKey.all, 'organization'],
};

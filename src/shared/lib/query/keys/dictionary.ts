export const dictionaryQueryKey = {
  all: ['dictionary'],
  securityClassification: () => [
    ...dictionaryQueryKey.all,
    'securityClassification',
  ],
  recipient: () => [...dictionaryQueryKey.all, 'recipient'],
};

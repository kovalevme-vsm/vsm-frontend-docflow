export const dictionaryApiPath = {
  securityClassification: 'dictionary/security-classification',
  recipient: 'dictionary/recipient',
  sender: 'dictionary/sender',
  organization: 'dictionary/organization',
  organizationDetail: (organizationId: string | null) =>
    `dictionary/organization/${organizationId}`,
};

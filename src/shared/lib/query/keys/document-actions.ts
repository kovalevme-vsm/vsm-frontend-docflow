export const documentActionsQueryKey = {
  all: ['document_actions'],
  documentActionsAllRegistered: () => [
    ...documentActionsQueryKey.all,
    'all-registered',
  ],
};

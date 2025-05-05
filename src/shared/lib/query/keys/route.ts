export const routeQueryKey = {
  all: ['route'],
  routeTemplateList: () => [...routeQueryKey.all, 'route-template-list'],
  routeDocumentTypes: () => [...routeQueryKey.all, 'route-document-types'],
  routeStepTypes: () => [...routeQueryKey.all, 'route-step-types'],
  routeParticipantTypes: () => [
    ...routeQueryKey.all,
    'route-participant-types',
  ],
};

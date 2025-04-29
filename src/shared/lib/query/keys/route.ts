export const routeQueryKey = {
  all: ['route'],
  routeDocumentTypes: () => [...routeQueryKey.all, 'route-document-types'],
  routeStepTypes: () => [...routeQueryKey.all, 'route-step-types'],
  routeParticipantTypes: () => [
    ...routeQueryKey.all,
    'route-participant-types',
  ],
};

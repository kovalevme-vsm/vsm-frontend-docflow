export const routeQueryKey = {
  all: ['route'],
  routeDocumentTypes: () => [...routeQueryKey.all, 'route-document-types'],
};

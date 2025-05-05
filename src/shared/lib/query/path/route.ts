export const routeApiPath = {
  routeDocumentTypes: 'route/document-types',
  routeStepTypes: 'route/step-types',
  routeParticipantTypes: 'route/participant-types',
  routeTemplateCreate: 'route/template',
  routeTemplateList: 'route/template',
  routeTemplateDelete: (route_id: string) => `route/template/${route_id}`,
};

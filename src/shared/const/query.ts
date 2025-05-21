export const QUERY = {
  SYSTEM_SETTINGS_USER_MANAGEMENT: {
    paths: { index: 'users/management', detail: (id: string) => `users/management/${id}` },
    keys: { list: ['api', 'users', 'management'], detail: (id: string) => ['api', 'users', 'management', id] },
  },
  SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT: {
    paths: { index: 'users/departments', detail: (id: string) => `users/departments/${id}` },
    keys: { list: ['api', 'users', 'departments'], detail: (id: string) => ['api', 'users', 'departments', id] },
  },
  SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT: {
    paths: { index: 'users/job-titles', detail: (id: string) => `users/job-titles/${id}` },
    keys: { list: ['api', 'users', 'job-titles'], detail: (id: string) => ['api', 'users', 'job-titles', id] },
  },
  SYSTEM_SETTINGS_GROUPS_MANAGEMENT: {
    paths: { index: 'users/groups', detail: (id: string) => `users/groups/${id}` },
    keys: { list: ['api', 'users', 'groups'], detail: (id: string) => ['api', 'users', 'groups', id] },
  },
  SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT: {
    paths: {
      index: (dictionary: string) => `dictionary/${dictionary}`,
      detail: (dictionary: string, id: string) => `dictionary/${dictionary}/${id}`,
    },
    keys: {
      list: (dictionary: string) => ['api', 'dicrionary', dictionary],
      detail: (dictionary: string, id: string) => ['api', 'dicrionary', dictionary, id],
    },
  },
  SYSTEM_SELECT_DOCUMENT_TYPES: {
    paths: {
      index: `routes/document-types`,
    },
    keys: {
      list: ['api', 'routes', 'document-types'],
    },
  },
  SYSTEM_SELECT_STEP_TYPES: {
    paths: {
      index: `routes/step-types`,
    },
    keys: {
      list: ['api', 'routes', 'step-types'],
    },
  },
  SYSTEM_SELECT_PARTICIPANT_TYPES: {
    paths: {
      index: `routes/participant-types`,
    },
    keys: {
      list: ['api', 'routes', 'participant-types'],
    },
  },
  SYSTEM_SETTINGS_ROUTE_MANAGEMENT: {
    paths: { index: 'routes/template', detail: (id: string) => `routes/template/${id}` },
    keys: { list: ['api', 'routes', 'template'], detail: (id: string) => ['api', 'routes', 'template', id] },
  },
};

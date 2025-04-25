export const outgoingQueryKey = {
  all: ['outgoing'],
  outgoingSelect: () => [...outgoingQueryKey.all, 'select'],
};

import { createRoutine } from 'redux-saga-routines';

export const fetchRevisions = createRoutine('FETCH_REVISIONS', {
  success: ({ query: { pages } }: any): any => {
    //const { entities } = normalize(pages, [pageSchema]);
    return {
      revisions: {},
    };
  },
});

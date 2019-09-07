import { fetchRevisions } from '../routines';
import { normalize, schema } from 'normalizr';

const initialState = {
  revisions: null,
  loading: false,
  error: null
};

export const revision = new schema.Entity(
  'revisions',
  {},
  {
    idAttribute: value => value.revid
  }
);

export default function historyReducer(state = initialState, action: any) {
  switch (action.type) {
    case fetchRevisions.TRIGGER:
      return {
        ...state,
        loading: true
      };
    case fetchRevisions.SUCCESS:
      //console.log('action.payload', action.payload);

      const page = new schema.Entity(
        'pages',
        {
          revisions: [revision]
        },
        {
          idAttribute: value => value.pageid
        }
      );
      const { entities: { revisions }, result } = normalize(action.payload.query, { pages: [page] });
      console.log({ result })
      return {
        ...state,
        revisions
      };
    case fetchRevisions.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case fetchRevisions.FULFILL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

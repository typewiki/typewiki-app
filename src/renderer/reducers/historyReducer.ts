import { fetchRevisions } from '../routines';
import merge from 'lodash-es/merge';

const initialState = {
  revisions: {},
  loading: false,
  error: null
};

export default function historyReducer(state = initialState, action: any) {
  switch (action.type) {
    case fetchRevisions.TRIGGER:
      return {
        ...state,
        loading: true
      };
    case fetchRevisions.SUCCESS:
      return {
        ...state,
        revisions: merge(state.revisions, action.payload.revisions)
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

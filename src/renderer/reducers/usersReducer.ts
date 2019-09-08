import { fetchUsers } from '../routines';
import merge from 'lodash-es/merge'

const initialState = {
  users: {},
  loading: false,
  error: null
};

export default function usersReducer(state = initialState, action: any) {
  switch (action.type) {
    case fetchUsers.TRIGGER:
      return {
        ...state,
        loading: true
      };
    case fetchUsers.SUCCESS:
      return {
        ...state,
        users: merge(state.users, action.payload.users)
      };
    case fetchUsers.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case fetchUsers.FULFILL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

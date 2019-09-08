import { createRoutine } from 'redux-saga-routines';
import { normalize } from 'normalizr';
import { userSchema } from './common/schemas/user';

interface QueryPayload<T> {
  batchcomplete: string;
  query: T;
}

export const clientLogin = createRoutine('CLIENT_LOGIN');
export const logout = createRoutine('LOGOUT');
export const fetchRevisions = createRoutine('FETCH_REVISIONS');
export const fetchUsers = createRoutine('FETCH_USERS', {
  success: ({ query: { users } }: QueryPayload<{ users: any[] }>): any => {
    const { entities } = normalize(users, [userSchema]);
    return entities;
  }
});

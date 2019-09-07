import { createRoutine } from 'redux-saga-routines';

export const clientLogin = createRoutine('CLIENT_LOGIN');
export const logout = createRoutine('LOGOUT');
export const fetchRevisions = createRoutine('REVISIONS');
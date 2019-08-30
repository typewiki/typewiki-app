import { createRoutine } from 'redux-saga-routines';

export const clientLogin = createRoutine('CLIENT_LOGIN');
export const fetchTokens = createRoutine('FETCH_LOGIN_TOKENS');
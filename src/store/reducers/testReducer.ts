import { routine } from '../routines';
import { createActions, handleActions, combineActions } from 'redux-actions';

export default handleActions(
  {
    [routine.REQUEST]: state => state + 1,
  },
  0,
);

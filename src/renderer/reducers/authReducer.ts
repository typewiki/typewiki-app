import { fetchData } from '../routines';
import { createReducer } from 'typesafe-actions';

const initialState = {
  data: null,
  loading: false,
  error: null
};

export default function exampleReducer(state = initialState, action: any) {
  switch (action.type) {
    case fetchData.TRIGGER:
      console.log(454354, action);
      return {
        ...state,
        loading: true
      };
    case fetchData.SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case fetchData.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case fetchData.FULFILL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

// const x = createReducer({
//   data: null,
//   loading: false,
//   error: null
// })
//   .handleAction(fetchData.TRIGGER, (state, action) => {
//     return {
//       ...state,
//       loading: true
//     }
//   })
//   .handleAction(fetchData.SUCCESS, (state, action) => {
//     return {
//       ...state,
//       loading: true
//     }
//   })
//   .handleAction(fetchData.TRIGGER, (state, action) => {
//     return {
//       ...state,
//       loading: true
//     }
//   })

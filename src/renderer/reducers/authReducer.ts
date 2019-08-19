import { fetchData } from '../routines';

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

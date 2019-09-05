import { fetchTokens } from '../routines';

const initialState = {
  data: null,
  loading: false,
  error: null
};

export default function tokensReducer(state = initialState, action: any) {
  switch (action.type) {
    // case fetchTokens.TRIGGER:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // case fetchTokens.SUCCESS:
    //   return {
    //     ...state,
    //     data: action.payload.query.tokens
    //   };
    // case fetchTokens.FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload
    //   };
    // case fetchTokens.FULFILL:
    //   return {
    //     ...state,
    //     loading: false
    //   };
    default:
      return state;
  }
}

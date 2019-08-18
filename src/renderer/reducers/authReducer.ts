// import { fetchData } from '../routines';
//
// const initialState = {
//   data: null,
//   loading: false,
//   error: null
// };
//
// export default function exampleReducer(state = initialState, action: any) {
//   switch (action.type) {
//     case fetchData.TRIGGER:
//       return {
//         ...state,
//         loading: true
//       };
//     case fetchData.SUCCESS:
//       return {
//         ...state,
//         data: action.payload
//       };
//     case fetchData.FAILURE:
//       return {
//         ...state,
//         error: action.payload
//       };
//     case fetchData.FULFILL:
//       return {
//         ...state,
//         loading: false
//       };
//     default:
//       return state;
//   }
// }

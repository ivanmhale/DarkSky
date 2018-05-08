import { GET_WEATHER } from "../actions/types";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
    console.log(action.payload);
      return {
        weather: action.payload.data
      };
    default:
      return state;
  }
};

export default reducer;

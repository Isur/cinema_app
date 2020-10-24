import {
  FETCH_HALLS,
  FETCH_HALLS_FAIL,
  FETCH_HALLS_SUCCESS,
} from "./Halls.types";

const INITIAL_STATE = {
  halls: [],
  loading: false,
};

const hallsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_HALLS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HALLS_SUCCESS:
      return {
        ...state,
        halls: action.halls,
        loading: false,
      };
    case FETCH_HALLS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default hallsReducer;

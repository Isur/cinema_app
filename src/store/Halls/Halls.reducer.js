import {
  ADD_HALL_SUCCESS,
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
    case ADD_HALL_SUCCESS:
      return {
        ...state,
        halls: state.halls.concat(action.hall),
      };
    default:
      return { ...state };
  }
};

export default hallsReducer;

import {
  ADD_SHOWING,
  ADD_SHOWING_SUCCESS,
  FETCH_SHOWINGS,
  FETCH_SHOWINGS_FAIL,
  FETCH_SHOWINGS_SUCCESS,
} from "./Showings.types";

const INITIAL_STATE = {
  showings: [],
  loading: false,
};

const showingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHOWINGS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SHOWINGS_SUCCESS:
      return {
        ...state,
        showings: action.showings,
        loading: false,
      };
    case FETCH_SHOWINGS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case ADD_SHOWING_SUCCESS:
      return {
        ...state,
        showings: state.showings.concat(action.showing),
      };
    default:
      return { ...state };
  }
};

export default showingsReducer;

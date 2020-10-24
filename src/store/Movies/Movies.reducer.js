import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
} from "./Movies.types";

const INITIAL_STATE = {
  movies: [],
  loading: false,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        loading: false,
      };
    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;

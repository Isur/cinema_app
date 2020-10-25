import {
  ADD_MOVIE_SUCCESS,
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
} from "./Movies.types";
import { UPDATE_MOVIE_SUCCESS } from "../Movies/Movies.types";

const INITIAL_STATE = {
  movies: [],
  loading: false,
};

const updateMoviesArray = (state, action) => {
  const newIndex = state.movies.findIndex(
    (movie) => movie.id === action.movie.id
  );
  const newArray = [...state.movies];
  newArray.splice(newIndex, 1, action.movie);

  return [...newArray];
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
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: updateMoviesArray(state, action),
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.concat(action.movie),
      };
    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: updateMoviesArray(state, action),
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;

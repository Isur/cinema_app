import {
  ADD_MOVIE,
  ADD_MOVIE_FAIL,
  ADD_MOVIE_SUCCESS,
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
} from "./Movies.types";

export const fetchMovies = () => {
  return {
    type: FETCH_MOVIES,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies: movies,
  };
};

export const fetchMoviesFail = (error) => {
  return {
    type: FETCH_MOVIES_FAIL,
    error: error,
  };
};

export const addMovie = (title, year, director) => {
  return {
    type: ADD_MOVIE,
    title,
    year,
    director,
  };
};

export const addMovieSuccess = (movie) => {
  return {
    type: ADD_MOVIE_SUCCESS,
    movie: movie,
  };
};

export const addMovieFail = (error) => {
  return {
    type: ADD_MOVIE_FAIL,
    error: error,
  };
};

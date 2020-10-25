import {
  ADD_MOVIE,
  ADD_MOVIE_FAIL,
  ADD_MOVIE_SUCCESS,
  FETCH_MOVIE,
  FETCH_MOVIE_FAIL,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
  UPDATE_MOVIE,
  UPDATE_MOVIE_FAIL,
  UPDATE_MOVIE_SUCCESS,
} from "./Movies.types";
import {
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "../Users/Users.types";

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

export const fetchMovie = (id) => {
  return {
    type: FETCH_MOVIE,
    id: id,
  };
};

export const fetchMovieSuccess = (movie) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    movie: movie,
  };
};

export const fetchMovieFail = (error) => {
  return {
    type: FETCH_MOVIE_FAIL,
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

export const updateMovie = (id, title, year, director) => {
  return {
    type: UPDATE_MOVIE,
    id,
    title,
    year,
    director,
  };
};

export const updateMovieSuccess = (movie) => {
  return {
    type: UPDATE_MOVIE_SUCCESS,
    movie: movie,
  };
};

export const updateMovieFail = (error) => {
  return {
    type: UPDATE_MOVIE_FAIL,
    error: error,
  };
};

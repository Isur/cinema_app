import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";
import {
  ADD_MOVIE,
  FETCH_MOVIE,
  FETCH_MOVIES,
  UPDATE_MOVIE,
} from "./Movies.types";
import {
  addMovieFail,
  addMovieSuccess,
  fetchMovieFail,
  fetchMoviesFail,
  fetchMoviesSuccess,
  fetchMovieSuccess,
  updateMovieFail,
  updateMovieSuccess,
} from "./Movies.actions";

export function* watchMoviesSaga() {
  yield takeLatest(FETCH_MOVIES, getMovies);
  yield takeLatest(FETCH_MOVIE, getMovie);
  yield takeLatest(ADD_MOVIE, createMovie);
  yield takeLatest(UPDATE_MOVIE, editMovie);
}

function* getMovies() {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Movies",
        method: "GET",
      })
    );
    yield put(fetchMoviesSuccess(data));
  } catch (e) {
    yield put(fetchMoviesFail(e));
  }
}

function* getMovie(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/Movies/${action.id}`,
        method: "GET",
      })
    );
    yield put(fetchMovieSuccess(data));
  } catch (e) {
    yield put(fetchMovieFail(e));
  }
}

function* createMovie(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Movies",
        data: {
          Title: action.title,
          Year: parseInt(action.year),
          Director: action.director,
        },
        method: "POST",
      })
    );
    yield put(addMovieSuccess(data.movie));
  } catch (e) {
    yield put(addMovieFail(e));
  }
}

function* editMovie(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/Movies/${action.id}`,
        data: {
          Title: action.title,
          Year: parseInt(action.year),
          Director: action.director,
        },
        method: "PATCH",
      })
    );
    yield put(updateMovieSuccess(data.movie));
  } catch (e) {
    yield put(updateMovieFail(e));
  }
}

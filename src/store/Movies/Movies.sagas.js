import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";
import { ADD_MOVIE, FETCH_MOVIES } from "./Movies.types";
import {
  addMovieFail,
  addMovieSuccess,
  fetchMoviesFail,
  fetchMoviesSuccess,
} from "./Movies.actions";

export function* watchMoviesSaga() {
  yield takeLatest(FETCH_MOVIES, getMovies);
  yield takeLatest(ADD_MOVIE, createMovie);
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

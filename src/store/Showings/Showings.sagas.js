import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { ADD_SHOWING, FETCH_SHOWINGS, UPDATE_SHOWING } from "./Showings.types";
import {
  fetchShowingsFail,
  fetchShowingsSuccess,
  updateShowingFail,
  updateShowingSuccess,
} from "./Showings.actions";
import {
  addShowingFail,
  addShowingSuccess,
} from "../Showings/Showings.actions";

export function* watchShowingsSaga() {
  yield takeLatest(FETCH_SHOWINGS, getShowings);
  yield takeLatest(ADD_SHOWING, createShowing);
  yield takeLatest(UPDATE_SHOWING, editShowing);
}

function* getShowings() {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Showings",
        method: "GET",
      })
    );
    yield put(fetchShowingsSuccess(data));
  } catch (e) {
    yield put(fetchShowingsFail(e));
  }
}

function* createShowing(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Showings",
        data: {
          Movie: action.movie,
          Hall: action.hall,
          Time: action.time,
        },
        method: "POST",
      })
    );
    yield put(addShowingSuccess(data.showing));
  } catch (e) {
    yield put(addShowingFail(e));
  }
}

function* editShowing(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/Showings/${action.id}`,
        data: {
          Movie: action.movie,
          Hall: action.hall,
          Time: action.time,
        },
        method: "PATCH",
      })
    );
    yield put(updateShowingSuccess(data.showing));
  } catch (e) {
    yield put(updateShowingFail(e));
  }
}

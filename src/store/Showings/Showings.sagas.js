import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { ADD_SHOWING, FETCH_SHOWINGS } from "./Showings.types";
import { fetchShowingsFail, fetchShowingsSuccess } from "./Showings.actions";
import {
  addShowingFail,
  addShowingSuccess,
} from "../Showings/Showings.actions";

export function* watchShowingsSaga() {
  yield takeLatest(FETCH_SHOWINGS, getShowings);
  yield takeLatest(ADD_SHOWING, createShowing);
}

function* getShowings() {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Showings",
        method: "GET",
      })
    );
    console.log(data);
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
    console.log(data);
    yield put(addShowingSuccess(data.movie));
  } catch (e) {
    yield put(addShowingFail(e));
  }
}

import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";
import { FETCH_SHOWINGS } from "./Showings.types";
import { fetchShowingsFail, fetchShowingsSuccess } from "./Showings.actions";

export function* watchShowingsSaga() {
  yield takeLatest(FETCH_SHOWINGS, getShowings);
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

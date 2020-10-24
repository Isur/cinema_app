import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";
import { ADD_HALL, FETCH_HALLS } from "./Halls.types";
import {
  addHallFail,
  addHallSuccess,
  fetchHallsFail,
  fetchHallsSuccess,
} from "./Halls.actions";

export function* watchHallsSaga() {
  yield takeLatest(FETCH_HALLS, getHalls);
  yield takeLatest(ADD_HALL, createHall);
}

function* getHalls() {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Halls",
        method: "GET",
      })
    );
    yield put(fetchHallsSuccess(data));
  } catch (e) {
    yield put(fetchHallsFail(e));
  }
}

function* createHall(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Halls",
        data: {
          Name: action.name,
          SizeX: parseInt(action.sizeX),
          SizeY: parseInt(action.sizeY),
        },
        method: "POST",
      })
    );
    yield put(addHallSuccess(data.hall));
  } catch (e) {
    yield put(addHallFail(e));
  }
}

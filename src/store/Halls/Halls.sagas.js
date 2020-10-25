import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { ADD_HALL, FETCH_HALL, FETCH_HALLS, UPDATE_HALL } from "./Halls.types";
import {
  addHallFail,
  addHallSuccess,
  fetchHallFail,
  fetchHallsFail,
  fetchHallsSuccess,
  fetchHallSuccess,
  updateHallFail,
  updateHallSuccess,
} from "./Halls.actions";

export function* watchHallsSaga() {
  yield takeLatest(FETCH_HALLS, getHalls);
  yield takeLatest(FETCH_HALL, getHall);
  yield takeLatest(ADD_HALL, createHall);
  yield takeLatest(UPDATE_HALL, editHall);
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

function* getHall(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/Halls/${action.id}`,
        method: "GET",
      })
    );
    yield put(fetchHallSuccess(data));
  } catch (e) {
    yield put(fetchHallFail(e));
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

function* editHall(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/Halls/${action.id}`,
        data: {
          Name: action.name,
          SizeX: parseInt(action.sizeX),
          SizeY: parseInt(action.sizeY),
        },
        method: "PATCH",
      })
    );
    yield put(updateHallSuccess(data.hall));
  } catch (e) {
    yield put(updateHallFail(e));
  }
}

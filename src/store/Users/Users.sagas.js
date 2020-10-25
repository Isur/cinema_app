import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";
import { ADD_USER, FETCH_USERS, UPDATE_USER } from "./Users.types";
import {
  addUserFail,
  addUserSuccess,
  fetchUsersFail,
  fetchUsersSuccess,
  updateUserFail,
  updateUserSuccess,
} from "./Users.actions";

export function* watchUsersSaga() {
  yield takeLatest(FETCH_USERS, getUsers);
  yield takeLatest(ADD_USER, createUser);
  yield takeLatest(UPDATE_USER, editUser);
}

function* getUsers() {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/User",
        method: "GET",
      })
    );
    yield put(fetchUsersSuccess(data));
  } catch (e) {
    yield put(fetchUsersFail(e));
  }
}

function* createUser(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/User",
        data: {
          FirstName: action.firstName,
          LastName: action.lastName,
          UserName: action.userName,
          Password: action.password,
          Role: action.role,
        },
        method: "POST",
      })
    );
    yield put(addUserSuccess(data.user));
  } catch (e) {
    yield put(addUserFail(e));
  }
}

function* editUser(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/User/${action.id}`,
        data: {
          FirstName: action.firstName,
          LastName: action.lastName,
          UserName: action.userName,
          Password: action.password,
          Role: action.role,
        },
        method: "PATCH",
      })
    );
    yield put(updateUserSuccess(data.user));
  } catch (e) {
    yield put(updateUserFail(e));
  }
}

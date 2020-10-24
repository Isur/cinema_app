import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./User.types";
import {
  loginUserFail,
  loginUserSuccess,
  registerUserFail,
  registerUserSuccess,
} from "./User.actions";

export function* watchUserSaga() {
  yield takeLatest(REGISTER_USER, register);
  yield takeLatest(LOGIN_USER, login);
}

function* register(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Auth/register",
        data: {
          UserName: action.userName,
          FirstName: action.firstName,
          LastName: action.lastName,
          Password: action.password,
        },
        method: "POST",
      })
    );
    yield put(registerUserSuccess(data));
    yield* login({ userName: action.userName, password: action.password });
  } catch (e) {
    yield put(registerUserFail(e));
  }
}

function* login(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Auth/login",
        data: {
          UserName: action.userName,
          Password: action.password,
        },
        method: "POST",
      })
    );
    yield put(
      loginUserSuccess(
        data.firstName,
        data.lastName,
        data.userName,
        data.role,
        data.token
      )
    );
    yield put(push("/movies"));
  } catch (e) {
    yield put(loginUserFail(e));
  }
}

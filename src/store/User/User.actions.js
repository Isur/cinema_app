import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "./User.types";

export const registerUser = (firstName, lastName, userName, password) => {
  return {
    type: REGISTER_USER,
    firstName,
    lastName,
    userName,
    password,
  };
};

export const registerUserSuccess = (id) => {
  return {
    type: REGISTER_USER_SUCCESS,
    id,
  };
};

export const registerUserFail = (error) => {
  return {
    type: REGISTER_USER_FAIL,
    error,
  };
};

export const loginUser = (userName, password) => {
  return {
    type: LOGIN_USER,
    userName,
    password,
  };
};

export const loginUserSuccess = (token) => {
  return {
    type: LOGIN_USER_SUCCESS,
    token,
  };
};

export const loginUserFail = (error) => {
  return {
    type: LOGIN_USER_FAIL,
    error,
  };
};

import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  FETCH_USERS,
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "./Users.types";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users: users,
  };
};

export const fetchUsersFail = (error) => {
  return {
    type: FETCH_USERS_FAIL,
    error: error,
  };
};

export const addUser = (firstName, lastName, userName, password, role) => {
  return {
    type: ADD_USER,
    firstName,
    lastName,
    userName,
    password,
    role,
  };
};

export const addUserSuccess = (user) => {
  return {
    type: ADD_USER_SUCCESS,
    user: user,
  };
};

export const addUserFail = (error) => {
  return {
    type: ADD_USER_FAIL,
    error: error,
  };
};

export const updateUser = (
  id,
  firstName,
  lastName,
  userName,
  password,
  role
) => {
  return {
    type: UPDATE_USER,
    id,
    firstName,
    lastName,
    userName,
    password,
    role,
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    user: user,
  };
};

export const updateUserFail = (error) => {
  return {
    type: UPDATE_USER_FAIL,
    error: error,
  };
};

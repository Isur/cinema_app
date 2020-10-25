import {
  ADD_USER_SUCCESS,
  FETCH_USERS,
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_SUCCESS,
} from "./Users.types";

const INITIAL_STATE = {
  users: [],
  loading: false,
};

const updateUsersArray = (state, action) => {
  const newIndex = state.users.findIndex((user) => user.id === action.user.id);
  const newArray = [...state.users];
  newArray.splice(newIndex, 1, action.user);

  return [...newArray];
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: state.users.concat(action.user),
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: updateUsersArray(state, action),
      };
    default:
      return { ...state };
  }
};

export default usersReducer;

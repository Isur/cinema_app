import { LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS } from "./User.types";

const INITIAL_STATE = {
  id: null,
  firstName: null,
  lastName: null,
  userName: null,
  role: null,
  accessToken: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        id: action.id,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        userName: action.userName,
        role: action.role,
        accessToken: action.token,
      };
    default:
      return state;
  }
};

export default userReducer;

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./User/User.reducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userState: userReducer,
  });

export default rootReducer;
